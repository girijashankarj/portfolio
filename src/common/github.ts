export const GITHUB_USER = 'girijashankarj'
export const GITHUB_REPOS_API = `https://api.github.com/users/${GITHUB_USER}/repos`

export interface GitHubRepo {
  name: string
  html_url: string
  fork: boolean
  archived: boolean
  private: boolean
  stargazers_count: number
}

/** Count stars from public original repos only. */
export function isPortfolioEligibleRepo(repo: Pick<GitHubRepo, 'private' | 'archived' | 'fork'>): boolean {
  return !repo.private && !repo.archived && !repo.fork
}

let ownerReposPromise: Promise<GitHubRepo[]> | null = null

export function loadOwnerRepos(): Promise<GitHubRepo[]> {
  if (!ownerReposPromise) {
    ownerReposPromise = fetchAllOwnerRepos().catch((error) => {
      ownerReposPromise = null
      throw error
    })
  }
  return ownerReposPromise
}

async function fetchAllOwnerRepos(): Promise<GitHubRepo[]> {
  const repos: GitHubRepo[] = []
  let page = 1

  while (true) {
    const response = await fetch(`${GITHUB_REPOS_API}?per_page=100&page=${page}&type=owner`, {
      cache: 'no-store',
    })
    if (!response.ok) throw new Error(`GitHub API returned ${response.status}`)

    const pageRepos = await response.json() as GitHubRepo[]
    repos.push(...pageRepos)
    if (pageRepos.length < 100) break
    page += 1
  }

  return repos
}

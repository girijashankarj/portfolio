import { useEffect, useMemo, useState } from 'react'
import {
  isPortfolioEligibleRepo,
  loadOwnerRepos,
  type GitHubRepo,
} from '@/common/github'

export function useGitHubRepos() {
  const [repos, setRepos] = useState<GitHubRepo[] | null>(null)

  useEffect(() => {
    let cancelled = false

    loadOwnerRepos()
      .then((loaded) => {
        if (!cancelled) setRepos(loaded)
      })
      .catch(() => {
        if (!cancelled) setRepos(null)
      })

    return () => {
      cancelled = true
    }
  }, [])

  const archivedRepoNames = useMemo(
    () => new Set((repos ?? []).filter((repo) => repo.archived).map((repo) => repo.name)),
    [repos],
  )

  const totalStars = useMemo(
    () => (repos ?? [])
      .filter(isPortfolioEligibleRepo)
      .reduce((sum, repo) => sum + repo.stargazers_count, 0),
    [repos],
  )

  return {
    repos,
    archivedRepoNames,
    totalStars: repos ? totalStars : null,
  }
}

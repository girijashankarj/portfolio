export type ProjectCategory = 'all' | 'ai-ml' | 'react-web' | 'javascript' | 'fullstack' | 'dev-tools'

export interface Project {
  id: string
  title: string
  url: string
  category: ProjectCategory
  /** When set, project has a live demo; url = repo, this = demo. Shown as "Live" link. */
  liveUrl?: string
  /** Marks a project for visual emphasis in the portfolio project list. */
  featured?: boolean
  description?: string
  technologies?: string[]
  highlights?: string[]
}

export interface NavItem {
  id: string
  label: string
  href: string
}

export interface Testimonial {
  name: string
  role: string
  text: string
  highlight: string
  linkedinUrl?: string
}

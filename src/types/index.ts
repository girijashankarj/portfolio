export type ProjectCategory = 'all' | 'ai-ml' | 'react-web' | 'javascript' | 'fullstack' | 'dev-tools'

export interface Project {
  id: string
  title: string
  url: string
  category: ProjectCategory
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

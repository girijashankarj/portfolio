import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveCategory } from '@/store/portfolioSlice'
import type { RootState } from '@/store'
import { PROJECTS, PROJECT_CATEGORIES } from '@/common/constants'
import type { Project } from '@/types'
import { Reveal } from '../shared/Reveal'

// Public portfolio hide list. This does not delete or change GitHub repositories.
// Educational/learning and low-signal legacy work stays on GitHub but is intentionally hidden.
// Kalu Memories is intentionally retained.
const HIDDEN_PROJECT_IDS = new Set([
  'architecture-prep', 'react-patterns', 'idkjs',
  'react-webpack', 'react-explorer', 'material-todo', 'next-login',
  'js-flux-explorer', 'neon-counter', 'json-diff', 'kings-riders', 'vvedding',
])

// Live Demo and Featured projects are intentionally also shown in this catalogue.
const VISIBLE_PROJECTS = PROJECTS
  .filter((project) => !HIDDEN_PROJECT_IDS.has(project.id))
  .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))

interface ProjectCategoryCardProps {
  categoryId: string
  categoryLabel: string
  projects: Project[]
}

function ProjectCategoryCard({ categoryId, categoryLabel, projects }: ProjectCategoryCardProps) {
  if (projects.length === 0) return null

  return (
    <Reveal>
      <div className="card" data-category={categoryId}>
        <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>{categoryLabel}</h3>
        <ol className="list list-ordered">
          {projects.map((project) => (
            <li key={project.id} style={{ marginBottom: '1rem', padding: project.featured ? '0.85rem' : '0.5rem', borderRadius: '8px', border: project.featured ? '1px solid var(--accent)' : '1px solid transparent', background: project.featured ? 'var(--card-strong)' : 'transparent', boxShadow: project.featured ? '0 0 0 1px var(--border)' : 'none', transition: 'background-color 0.2s ease' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontWeight: 700 }}>{project.title}</span>
                {project.featured && <span className="chip active" style={{ fontSize: '0.7rem', padding: '0.15rem 0.45rem' }}>Featured</span>}
              </div>
              <span style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.25rem' }}>
                <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontSize: '0.9rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}><i className="fa-brands fa-github" style={{ fontSize: '0.85rem' }}></i> Repo</a>
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontSize: '0.9rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}><i className="fa-solid fa-external-link" style={{ fontSize: '0.8rem' }}></i> Live</a>}
              </span>
              {project.description && <p style={{ margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--muted)', lineHeight: '1.5' }}>{project.description}</p>}
              {project.technologies && project.technologies.length > 0 && <div style={{ marginTop: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>{project.technologies.map((tech) => <span key={tech} className="chip" style={{ padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', background: 'var(--pill-bg-blue)', border: '1px solid var(--border)', color: 'var(--text)' }}>{tech}</span>)}</div>}
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  )
}

export function Projects() {
  const dispatch = useDispatch()
  const { activeCategory } = useSelector((state: RootState) => state.portfolio)

  const projectsByCategory = useMemo(() => VISIBLE_PROJECTS.reduce<Record<string, Project[]>>((groups, project) => {
    ;(groups[project.category] ??= []).push(project)
    return groups
  }, {}), [])

  const visibleCategories = PROJECT_CATEGORIES.filter((category) => category.id === 'all' || (projectsByCategory[category.id]?.length ?? 0) > 0)
  const filteredProjects = activeCategory === 'all' ? VISIBLE_PROJECTS : projectsByCategory[activeCategory] || []

  useEffect(() => {
    if (activeCategory !== 'all' && filteredProjects.length === 0) dispatch(setActiveCategory('all'))
  }, [activeCategory, filteredProjects.length, dispatch])

  const categoryCards = PROJECT_CATEGORIES.filter((category) => category.id !== 'all' && (projectsByCategory[category.id]?.length ?? 0) > 0)

  return (
    <section id="projects" className="section section-band" itemScope itemType="https://schema.org/ItemList">
      <div className="container">
        <h2 className="section-title reveal"><i className="fa-solid fa-code-branch" style={{ marginRight: '0.5rem' }}></i>Projects</h2>
        <p className="section-kicker reveal">Selected production-ready tools, AI/ML solutions, and developer utilities showcasing technical depth and innovation.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(0.4rem, 2vw, 0.6rem)', marginBottom: 'clamp(1.5rem, 4vw, 2rem)', justifyContent: 'center' }}>
          {visibleCategories.map((category) => <button key={category.id} onClick={() => dispatch(setActiveCategory(category.id))} className={`chip ${activeCategory === category.id ? 'active' : ''}`}>{category.label}</button>)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem', alignItems: 'stretch' }}>
          {activeCategory === 'all'
            ? categoryCards.map((category) => <ProjectCategoryCard key={category.id} categoryId={category.id} categoryLabel={category.label} projects={projectsByCategory[category.id] ?? []} />)
            : <ProjectCategoryCard categoryId={activeCategory} categoryLabel={PROJECT_CATEGORIES.find(c => c.id === activeCategory)?.label || ''} projects={filteredProjects} />}
        </div>
      </div>
    </section>
  )
}

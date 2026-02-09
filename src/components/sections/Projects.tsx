import { useSelector, useDispatch } from 'react-redux'
import { setActiveCategory } from '@/store/portfolioSlice'
import type { RootState } from '@/store'
import { PROJECTS, PROJECT_CATEGORIES } from '@/common/constants'
import type { Project } from '@/types'
import { Reveal } from '../shared/Reveal'

const PROJECTS_BY_CATEGORY: Record<string, Project[]> = {
  'ai-ml': PROJECTS.filter(p => p.category === 'ai-ml'),
  'react-web': PROJECTS.filter(p => p.category === 'react-web'),
  'javascript': PROJECTS.filter(p => p.category === 'javascript'),
  'fullstack': PROJECTS.filter(p => p.category === 'fullstack'),
  'dev-tools': PROJECTS.filter(p => p.category === 'dev-tools'),
}

interface ProjectCategoryCardProps {
  categoryId: string
  categoryLabel: string
  projects: Project[]
}

function ProjectCategoryCard({ categoryId, categoryLabel, projects }: ProjectCategoryCardProps) {
  return (
    <Reveal>
      <div className="card" data-category={categoryId}>
        <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>{categoryLabel}</h3>
        <ol className="list list-ordered">
          {projects.map((project) => (
            <li 
              key={project.id} 
              style={{ 
                marginBottom: '1rem',
                padding: '0.5rem',
                borderRadius: '6px',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-soft)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  color: 'var(--accent)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  borderBottom: '1px solid transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-2)'
                  e.currentTarget.style.borderBottomColor = 'var(--accent-2)'
                  e.currentTarget.style.transform = 'translateX(2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--accent)'
                  e.currentTarget.style.borderBottomColor = 'transparent'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <span>{project.title}</span>
                <i className="fa-solid fa-external-link" style={{ fontSize: '0.75rem', opacity: 0.7 }}></i>
              </a>
              {project.description && (
                <p style={{ 
                  margin: '0.25rem 0 0 0', 
                  fontSize: '0.9rem', 
                  color: 'var(--muted)',
                  lineHeight: '1.5',
                }}>
                  {project.description}
                </p>
              )}
              {project.technologies && project.technologies.length > 0 && (
                <div style={{ 
                  marginTop: '0.5rem', 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '0.4rem' 
                }}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="chip"
                      style={{
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        background: 'var(--pill-bg-blue)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
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

  const filteredProjects = activeCategory === 'all' 
    ? PROJECTS 
    : PROJECTS_BY_CATEGORY[activeCategory] || []

  return (
    <section id="projects" className="section section-band" itemScope itemType="https://schema.org/ItemList">
      <div className="container">
        <h2 className="section-title reveal">
          <i className="fa-solid fa-code-branch" style={{ marginRight: '0.5rem' }}></i>
          Featured Projects
        </h2>
        <p className="section-kicker reveal">
          Production-ready tools, AI/ML solutions, and developer utilities showcasing technical depth and innovation.
        </p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'clamp(0.4rem, 2vw, 0.6rem)',
          marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
          justifyContent: 'center',
        }}>
          {PROJECT_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => dispatch(setActiveCategory(category.id))}
              className={`chip ${activeCategory === category.id ? 'active' : ''}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '1.5rem',
          alignItems: 'stretch',
        }}>
          {activeCategory === 'all' ? (
            <>
              <ProjectCategoryCard 
                categoryId="dev-tools" 
                categoryLabel="Developer Tools & Config" 
                projects={PROJECTS_BY_CATEGORY['dev-tools']} 
              />
              <ProjectCategoryCard 
                categoryId="ai-ml" 
                categoryLabel="AI/ML Projects" 
                projects={PROJECTS_BY_CATEGORY['ai-ml']} 
              />
              <ProjectCategoryCard 
                categoryId="react-web" 
                categoryLabel="React/Web Projects" 
                projects={PROJECTS_BY_CATEGORY['react-web']} 
              />
              <ProjectCategoryCard 
                categoryId="fullstack" 
                categoryLabel="Full Stack Applications" 
                projects={PROJECTS_BY_CATEGORY['fullstack']} 
              />
              <ProjectCategoryCard 
                categoryId="javascript" 
                categoryLabel="JavaScript Projects" 
                projects={PROJECTS_BY_CATEGORY['javascript']} 
              />
            </>
          ) : (
            <ProjectCategoryCard 
              categoryId={activeCategory} 
              categoryLabel={PROJECT_CATEGORIES.find(c => c.id === activeCategory)?.label || ''} 
              projects={filteredProjects} 
            />
          )}
        </div>
      </div>
    </section>
  )
}

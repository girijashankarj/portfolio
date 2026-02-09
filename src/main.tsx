import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import { ErrorBoundary } from './components/shared/ErrorBoundary'
import './index.css'
import App from './App.tsx'

// Initialize theme before React renders to prevent flash
if (typeof document !== 'undefined') {
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark'
  document.body.setAttribute('data-theme', savedTheme)
}

// Initialize reveal animations for elements with reveal class directly on them
function initializeRevealAnimations() {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 }
  )

  const observeReveals = () => {
    document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
      revealObserver.observe(el)
    })
  }

  // Initial observation after a short delay to ensure DOM is ready
  setTimeout(observeReveals, 100)

  // Observe new elements added dynamically
  const mutationObserver = new MutationObserver(() => {
    observeReveals()
  })
  
  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
  })
}

// Initialize after DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeRevealAnimations)
  } else {
    initializeRevealAnimations()
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </StrictMode>,
)

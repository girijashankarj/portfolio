import { lazy, Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from './store'
import { ProgressBar } from './components/layout/ProgressBar'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Highlights } from './components/sections/Highlights'
import { BackToTop } from './components/shared/BackToTop'
import { ErrorBoundary } from './components/shared/ErrorBoundary'
import './App.css'

// Lazy load below-fold sections
const LazySkills = lazy(() => import('./components/sections/Skills').then(m => ({ default: m.Skills })))
const LazyJourney = lazy(() => import('./components/sections/Journey').then(m => ({ default: m.Journey })))
const LazyProjects = lazy(() => import('./components/sections/Projects').then(m => ({ default: m.Projects })))
const LazyCommunity = lazy(() => import('./components/sections/Community').then(m => ({ default: m.Community })))
const LazyServices = lazy(() => import('./components/sections/Services').then(m => ({ default: m.Services })))
const LazyTestimonials = lazy(() => import('./components/sections/Testimonials').then(m => ({ default: m.Testimonials })))
const LazyContact = lazy(() => import('./components/sections/Contact').then(m => ({ default: m.Contact })))

function App() {
  const theme = useSelector((state: RootState) => state.portfolio.theme)

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <>
      <a href="#about" className="skip-to-content" aria-label="Skip to main content">
        Skip to content
      </a>
      <ProgressBar />
      <Navbar />
      <main id="main" role="main">
        <Hero />
        <About />
        <Highlights />
        <ErrorBoundary fallback={<section className="section"><div className="container"><p style={{ textAlign: 'center', color: 'var(--muted)' }}>Something went wrong loading this section. Please refresh the page.</p></div></section>}>
          <Suspense fallback={<div style={{ padding: '3.5rem 0', textAlign: 'center' }} role="status" aria-live="polite">Loading...</div>}>
            <LazySkills />
            <LazyProjects />
            <LazyJourney />
            <LazyTestimonials />
            <LazyCommunity />
            <LazyServices />
            <LazyContact />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App

import { lazy, Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from './store'
import { ProgressBar } from './components/layout/ProgressBar'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { ExecutiveSummary } from './components/sections/ExecutiveSummary'
import { About } from './components/sections/About'
import { Highlights } from './components/sections/Highlights'
import { BackToTop } from './components/shared/BackToTop'
import './App.css'

// Lazy load below-fold sections
const LazySkills = lazy(() => import('./components/sections/Skills').then(m => ({ default: m.Skills })))
const LazyJourney = lazy(() => import('./components/sections/Journey').then(m => ({ default: m.Journey })))
const LazyProjects = lazy(() => import('./components/sections/Projects').then(m => ({ default: m.Projects })))
const LazyCommunity = lazy(() => import('./components/sections/Community').then(m => ({ default: m.Community })))
const LazyServices = lazy(() => import('./components/sections/Services').then(m => ({ default: m.Services })))
const LazyCertifications = lazy(() => import('./components/sections/Certifications').then(m => ({ default: m.Certifications })))
const LazyTechnologiesLearning = lazy(() => import('./components/sections/TechnologiesLearning').then(m => ({ default: m.TechnologiesLearning })))
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
      <main>
        <Hero />
        <ExecutiveSummary />
        <About />
        <Highlights />
        <Suspense fallback={<div style={{ padding: '3.5rem 0', textAlign: 'center' }}>Loading...</div>}>
          <LazyCertifications />
          <LazySkills />
          <LazyTechnologiesLearning />
          <LazyProjects />
          <LazyJourney />
          <LazyTestimonials />
          <LazyCommunity />
          <LazyServices />
          <LazyContact />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App

import { useEffect, useRef } from 'react'

export function useIntersectionObserver(
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
) {
  const elementsRef = useRef<Set<Element>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      threshold: 0.2,
      ...options,
    })

    elementsRef.current.forEach((el) => observer.observe(el))

    return () => {
      elementsRef.current.forEach((el) => observer.unobserve(el))
      observer.disconnect()
    }
  }, [callback, options])

  const observe = (element: Element | null) => {
    if (element && !elementsRef.current.has(element)) {
      elementsRef.current.add(element)
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
            }
          })
        },
        { threshold: 0.2 }
      )
      observer.observe(element)
    }
  }

  return { observe }
}

import { useState, useEffect } from 'react'

interface UseCountUpOptions {
  duration?: number
  start?: number
  end: number
  isVisible: boolean
  suffix?: string
  prefix?: string
}

export function useCountUp({ 
  duration = 2000, 
  start = 0, 
  end, 
  isVisible,
  suffix = '',
  prefix = ''
}: UseCountUpOptions): string {
  const [count, setCount] = useState(start)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(start + (end - start) * easeOut)
      
      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, start, end, duration])

  const formattedCount = count.toLocaleString()
  return `${prefix}${formattedCount}${suffix}`
}

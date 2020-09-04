import { useState, useEffect } from 'react'

export const useWindowSize = () => {
  const getSize = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    const handleRezise = () => setWindowSize(getSize)

    window.addEventListener('resize', handleRezise)
    return () => window.removeEventListener('resize', handleRezise)
  }, [])

  return windowSize
}

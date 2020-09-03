import React, { useEffect, useRef } from 'react'
import { Cursor } from '../../shared'
import { useCursorValues } from '../../../context/cursorContext'

interface Props {
  toggleMenu?: boolean
}

export const CustomCursor: React.FC<Props> = ({ toggleMenu }) => {
  const { cursorType } = useCursorValues()
  const cursor = useRef<HTMLInputElement>(null)

  const onMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event
    cursor.current!.style.left = `${clientX}px`
    cursor.current!.style.top = `${clientY}px`
  }

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <Cursor
      className={`${!!cursorType ? 'hovered' : ''} ${cursorType} ${
        toggleMenu ? 'nav-open' : ''
      }`}
      ref={cursor}
    />
  )
}

import { useState } from 'react'
import {
  CursorTypeT,
  CursorStylesType,
  onCursorType
} from '../models/CursorType'

export const useCursor = () => {
  const [cursorType, setCursorType] = useState<CursorTypeT>(false)
  const [cursorStyles, setCursorStyles] = useState<CursorStylesType>([
    'pointer',
    'hovered',
    'locked',
    'white'
  ])

  const onCursor: onCursorType = (onCursorType: CursorTypeT) => {
    if (onCursorType === 'none') onCursorType = false
    onCursorType =
      (cursorStyles.includes(onCursorType as string) && onCursorType) || false
    setCursorType(onCursorType)
  }

  return { cursorType, setCursorType, cursorStyles, setCursorStyles, onCursor }
}

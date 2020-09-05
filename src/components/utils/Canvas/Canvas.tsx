import React, { useEffect, useRef } from 'react'

import { CanvasContainer } from './CanvasStyles'


import { useCursorValues } from '../../../context/cursorContext'
import { useThemeValues } from '../../../context/themeContext'
import {useWindowSizeValues} from '../../../context/windowSizeContext'

export const Canvas = () => {
  const { currentTheme } = useThemeValues()
  const { onCursor } = useCursorValues()
  const {windowSize} = useWindowSizeValues()
  const canvas = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let renderingElement = canvas.current

    let drawingElement = renderingElement?.cloneNode() as HTMLCanvasElement
    let drawingCtx = drawingElement.getContext('2d')
    let renderingCtx = renderingElement!.getContext('2d')

    let lastX = 0
    let lastY = 0
    let moving = false

    renderingCtx!.globalCompositeOperation = 'source-over'
    renderingCtx!.fillStyle =
      currentTheme === 'darkTheme' ? '#000000' : '#ffffff'
    renderingCtx!.fillRect(0, 0, windowSize.width, windowSize.height)

    renderingElement?.addEventListener('mouseover', e => {
      moving = true
      lastX = e.pageX - renderingElement!.offsetLeft
      lastY = e.pageY - renderingElement!.offsetTop
    })

    renderingElement?.addEventListener('click', e => {
      moving = true
      lastX = e.pageX - renderingElement!.offsetLeft
      lastY = e.pageY - renderingElement!.offsetTop
    })

    renderingElement?.addEventListener('mouseup', e => {
      moving = false
      lastX = e.pageX - renderingElement!.offsetLeft
      lastY = e.pageY - renderingElement!.offsetTop
    })

    renderingElement?.addEventListener('mousemove', e => {
      if (moving) {
        drawingCtx!.globalCompositeOperation = 'source-over'
        renderingCtx!.globalCompositeOperation = 'destination-out'

        let currentX = e.pageX - renderingElement!.offsetLeft
        let currentY = e.pageY - renderingElement!.offsetTop

        drawingCtx!.lineJoin = 'round'
        drawingCtx!.moveTo(lastX, lastY)
        drawingCtx!.lineTo(currentX, currentY)
        drawingCtx!.closePath()
        drawingCtx!.lineWidth = 120
        drawingCtx!.stroke()
        lastX = currentX
        lastY = currentY
        renderingCtx!.drawImage(drawingElement, 0, 0)
      }
    })
  }, [currentTheme])

  return (
    <CanvasContainer
      ref={canvas}
      height={windowSize.height}
      width={windowSize.width}
      onMouseEnter={() => onCursor('hovered')}
      onMouseLeave={() => onCursor('none')}
    />
  )
}

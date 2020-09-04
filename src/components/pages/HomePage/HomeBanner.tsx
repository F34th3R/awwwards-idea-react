import React, { useRef, useEffect } from 'react'
import { Banner, Video, BannerTitle } from './HomeStyles'
import { Canvas, HeadLine } from '../../shared'

export const HomeBanner: React.FC = ({ children }) => {
  const canvas = useRef<HTMLCanvasElement>(null)

  // useEffect(() => {
  //   let renderingElement = canvas.current
  //   let drawingElement = renderingElement?.cloneNode() as HTMLCanvasElement

  //   let drawingCtx = drawingElement!.getContext('2d')
  //   let renderingCtx = renderingElement!.getContext('2d')

  //   let lastX = ''
  //   let lastY = ''

  //   let moving = false

  //   renderingCtx!.globalCompositeOperation = 'source-over'
  //   renderingCtx!.fillStyle = '#000000'
  //   renderingCtx!.fillRect(0, 0, 100, 100)
  // }, [])

  return (
    <Banner>
      <Video>
        <video
          height="100%"
          width="100%"
          loop
          autoPlay
          src={require('../../../assets/video/video.mp4')}
        />
      </Video>
      {/* <Canvas ref={canvas} /> */}
      <BannerTitle>
        <HeadLine>Dig</HeadLine>
        <HeadLine>Deep</HeadLine>
      </BannerTitle>
    </Banner>
  )
}

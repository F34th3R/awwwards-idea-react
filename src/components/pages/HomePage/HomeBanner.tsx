import React from 'react'
import { Banner, Video, BannerTitle } from './HomeStyles'
import { HeadLine } from '../../shared'
import { Canvas } from '../../utils'

const container = {
  initial: { y: 800 },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  initial: { y: 800 },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9]
    }
  }
}

export const HomeBanner: React.FC = ({ children }) => {
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
      {/* <Canvas /> */}
      <BannerTitle variants={container} initial="initial" animate="animate">
        <HeadLine variants={item}>Dig</HeadLine>
        <HeadLine variants={item}>Deep</HeadLine>
      </BannerTitle>
    </Banner>
  )
}

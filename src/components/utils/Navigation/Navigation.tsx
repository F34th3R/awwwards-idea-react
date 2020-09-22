import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// Styles
import { Container, Flex, HambuergerButton } from '../../shared'
import { Nav, NavHeader, NavFooter, NavVideos } from './NavigationStyles'
// Constants
import { NavigationList } from './NavigationList'

export const Navigation: React.FC = () => {
  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: 'featured-video.mp4',
    key: 0
  })

  return (
    <>
      <AnimatePresence>
        <Nav>
          <Container>
            <NavHeader>
              <Flex spaceBetween>
                <h2>Projects</h2>
                <HambuergerButton />
              </Flex>
            </NavHeader>
            <NavigationList setRevealVideo={setRevealVideo} />
            <NavFooter></NavFooter>
            <NavVideos>
              <motion.div
                className="reveal"
                animate={{ width: revealVideo.show ? 0 : '100%' }}
              ></motion.div>
              <div className="video">
                <AnimatePresence initial={false} exitBeforeEnter>
                  <motion.video
                    key={revealVideo.key}
                    src={require(`../../../assets/video/${revealVideo.video}`)}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    animate={{
                      opacity: 1
                    }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    loop
                    autoPlay
                  ></motion.video>
                </AnimatePresence>
              </div>
            </NavVideos>
          </Container>
        </Nav>
      </AnimatePresence>
    </>
  )
}

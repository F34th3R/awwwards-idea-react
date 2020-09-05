import React, { useState } from 'react'
import { Container, Flex } from '../../shared'
import {
  Nav,
  NavHeader,
  CloseNav,
  NavFooter,
  NavVideos
} from './NavigationStyles'
import { NavigationList } from './NavigationList'
import { motion, AnimatePresence } from 'framer-motion'

import { useMenuValues } from '../../../context/menuContext'

export const Navigation: React.FC = () => {
  const { toggleMenu, setToggleMenu } = useMenuValues()
  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: 'featured-video.mp4',
    key: 0
  })

  const closeNavHandler = () => setToggleMenu(prev => !prev)

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav>
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  <h2>Projects</h2>
                  <CloseNav onClick={closeNavHandler}>
                    <button>
                      <span></span>
                      <span></span>
                    </button>
                  </CloseNav>
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
        )}
      </AnimatePresence>
    </>
  )
}

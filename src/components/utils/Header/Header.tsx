import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { HeaderNav, Logo, Menu } from './HeaderStyle'
import { Container, Flex } from '../../shared'

// Context
import {
  useGlobalDispatchContext,
  useGlobalStateContext
} from '../../../context/globalContext'

export const Header: React.FC = () => {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()

  const toggleTheme = () => {
    currentTheme === 'dark'
      ? dispatch!({ type: 'TOGLE_THEME', theme: 'light' })
      : dispatch!({ type: 'TOGLE_THEME', theme: 'dark' })
  }

  useEffect(() => {
    window.localStorage.setItem('theme', currentTheme)
  }, [currentTheme])

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <Container>
        <Flex spaceBetween>
          <Logo>
            <Link to="/">P</Link>
            <span onClick={toggleTheme}></span>
            <Link to="/">int</Link>
          </Logo>
          <Menu>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

import { HeaderNav, Logo, Menu } from './HeaderStyle'
import { Container, Flex } from '../../shared'

import { useThemeValues } from '../../../context/themeContext'

export const Header: React.FC = () => {
  const { currentTheme, setCurrentTheme } = useThemeValues()

  const toggleTheme = () => {
    currentTheme === 'darkTheme'
      ? setCurrentTheme('lightTheme')
      : setCurrentTheme('darkTheme')
  }

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

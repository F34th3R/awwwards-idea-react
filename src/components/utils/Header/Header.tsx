import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import { HeaderNav, Logo, Menu } from './HeaderStyle'
import { Container, Flex } from '../../shared'

// Context
import { useThemeValues } from '../../../context/themeContext'
import { useCursorValues } from '../../../context/cursorContext'
import { useMenuValues } from '../../../context/menuContext'

export const Header: React.FC = () => {
  const { setToggleMenu } = useMenuValues()
  const { currentTheme, setCurrentTheme } = useThemeValues()
  const { onCursor } = useCursorValues()

  const toggleTheme = () => {
    currentTheme === 'darkTheme'
      ? setCurrentTheme('lightTheme')
      : setCurrentTheme('darkTheme')
  }

  const toggleMenuHandler = () => setToggleMenu(prev => !prev)

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <Container>
        <Flex spaceBetween>
          <Logo
            onMouseEnter={() => onCursor('hovered')}
            onMouseLeave={() => onCursor('none')}
          >
            <Link to="/">P</Link>
            <span
              onClick={toggleTheme}
              onMouseEnter={() => onCursor('pointer')}
              onMouseLeave={() => onCursor('none')}
            ></span>
            <Link to="/">int</Link>
          </Logo>
          <Menu onClick={toggleMenuHandler}>
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

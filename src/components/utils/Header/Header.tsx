import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { HeaderNav, Logo } from './HeaderStyle'
import { Container, Flex, HambuergerButton } from '../../shared'

// Context
import { useCursorValues } from '../../../context/cursorContext'
// states
import { currentThemeState } from '../../../states'

export const Header: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useRecoilState(currentThemeState)
  const { onCursor } = useCursorValues()

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
          <HambuergerButton />
        </Flex>
      </Container>
    </HeaderNav>
  )
}

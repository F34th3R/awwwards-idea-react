import React from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { toggleMenuState } from '../../states'

const Hambuerger = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;
    span {
      width: 36px;
      height: 8px;
      display: block;
      background: ${props => props.theme.text};
      margin: 8px;
    }
  }
`

export const HambuergerButton: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useRecoilState(toggleMenuState)
  const toggleMenuHandler = () => setToggleMenu(prev => !prev)

  return (
    <Hambuerger onClick={toggleMenuHandler}>
      <button>
        <span></span>
        <span></span>
      </button>
    </Hambuerger>
  )
}

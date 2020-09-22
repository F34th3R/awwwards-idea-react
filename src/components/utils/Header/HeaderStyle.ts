import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HeaderNav = styled(motion.div)`
  height: 0;
  width: 100%;
  position: absolute;
  top: 72px;
  right: 0;
  left: 0;
  z-index: 99;
`

export const Logo = styled.div`
  a {
    font-size: 1.8rem;
    text-decoration: none;
    font-weight: 800;
    color: ${props => props.theme.text || '#000'};
  }
  span {
    height: 16px;
    width: 16px;
    background: ${props => props.theme.primary};
    margin: 0 4px;
    border-radius: 100%;
    display: inline-block;
    position: relative;
    bottom: 2px;
  }
`

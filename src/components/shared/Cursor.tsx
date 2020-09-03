import styled from 'styled-components'

export const Cursor = styled.div`
  position: fixed;
  top: 400px;
  left: 400px;
  width: 32px;
  height: 32px;
  background: ${props => props.theme.primary};
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-event: none;
  z-index: 999;

  &.pointer {
    border: 4px solid ${props => props.theme.text};
  }

  &.hovered {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${props => props.theme.primary};
  }

  &.nav-open {
    background: ${props => props.theme.text};
  }

  &.nav-open,
  &.loked {
    border: 4px solid ${props => props.theme.text} !important;
  }
`

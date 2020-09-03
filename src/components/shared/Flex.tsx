import styled, { css } from 'styled-components'

type Props = {
  spaceBetween?: boolean
  flexEnd?: boolean
  alignTop?: boolean
  noHeight?: boolean
}

export const Flex = styled.div<Props>`
  position: relativel;
  display: flex;
  align-items: center;

  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}
  ${props =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}
  ${props =>
    props.alignTop &&
    css`
      justify-content: flex-start;
    `}
  ${props =>
    props.noHeight &&
    css`
      height: 0;
    `}
`

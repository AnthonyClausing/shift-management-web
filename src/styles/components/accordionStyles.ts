import { keyframes } from '@emotion/react'
import { ThemeUICSSObject } from 'theme-ui'

export const rotate = keyframes({ from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(-180deg)' } })
export const rotateBack = keyframes({from: {transform: 'rotate(-180deg)'}, to: {transform: 'rotate(0deg)'}})

export const buttonStyles: ThemeUICSSObject = {
  paddingY: '1.5rem',
  appearance: 'none',
  cursor: 'pointer',
  '&:focus': {
    outline: '2px solid transparent',
    outlineOffset: '2px'
  },
  '&:hover': {
    bg: 'secondary'
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}
export const containerStyles: ThemeUICSSObject = {
  overflow: 'auto',
  overflowY: 'hidden',
  maxHeight: '0',
  transition: 'max-height 350ms linear;',
  '&.open': {
    maxHeight: '100%',
    transition: 'max-height 350ms linear;'
  }
}
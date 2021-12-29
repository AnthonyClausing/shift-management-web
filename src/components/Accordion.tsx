 /** @jsxImportSource theme-ui */
import React, { useState, useLayoutEffect, useRef } from 'react';
import { Flex, Button, Text, Box, ThemeUICSSObject } from 'theme-ui'
import { keyframes } from '@emotion/react'
interface AccordionProps {
  title: React.ReactNode
  content: React.ReactNode
}
const rotate = keyframes({ from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(-180deg)' } })
const rotateBack = keyframes({from: {transform: 'rotate(-180deg)'}, to: {transform: 'rotate(0deg)'}})

const accordionButtonStyles: ThemeUICSSObject = {
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
const collapseContainerStyles: ThemeUICSSObject = {
  overflow: 'auto',
  overflowY: 'hidden',
  maxHeight: '0',
  transition: 'max-height 350ms linear;',
  '&.open': {
    maxHeight: '100%',
    transition: 'max-height 350ms linear;'
  }
}

const Accordion : React.FC<AccordionProps> = ({ title, content }) => {
  const [active, setActive] = useState(false)
  const [dirty, setDirty] = useState(false)
  const accordionButtonRef: React.RefObject<HTMLButtonElement> = useRef<HTMLButtonElement>(null)
  const rotationAnimation: ThemeUICSSObject = dirty ? { animation: `350ms ${active ? rotate : rotateBack} forwards` } : {}
  const classNames = `collapse${active ? ' open' : ''}`
  const toggleAccordion = () => {
    if(!dirty) setDirty(true)
    setActive((prevState) => !prevState)
  }
  useLayoutEffect(()=> {
    if(accordionButtonRef){
      let panel  = accordionButtonRef?.current?.nextElementSibling as HTMLElement
      if (panel && panel.style) {
        panel.style.maxHeight = `${active ? panel.scrollHeight:'0'}px`
      }
    }
  }, [active])

  return (
    <Flex sx={{flexDirection: 'column'}}>
      <Button
        sx={accordionButtonStyles}
        onClick={toggleAccordion}
        ref={accordionButtonRef}
      >
        <Text>{title}</Text>
        <Text sx={rotationAnimation}>V</Text>
      </Button>
      <Box className={classNames} sx={collapseContainerStyles}>
        {content}
      </Box>
    </Flex>
  )
}

export default Accordion;

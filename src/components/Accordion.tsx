 /** @jsxImportSource theme-ui */
import React, { useState, useEffect } from 'react';
import { Flex, Button, Text, ThemeUICSSObject } from 'theme-ui'
import { keyframes } from '@emotion/react'
interface AccordionProps {
  title: React.ReactNode
  content: React.ReactNode
}

const Accordion : React.FC<AccordionProps> = ({ title, content }) => {
  const [active, setActive] = useState(false)

  function toggleAccordion() {
    setActive((prevState) => !prevState)
  }
  const rotate = keyframes({ from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(180deg)' } })
  const rotationAnimation: ThemeUICSSObject = {
    // transitionProperty: 'transform',
    // transform: 'rotate(180deg)',
    animationName: rotate,
    animationDuration: '700ms',
    animationTimingFunction: 'ease'
  }
  const rotateStyles: ThemeUICSSObject = {
    transform: active ? 'rotate(180deg)' : 'rotate(0deg)'
  } 
  // useEffect(() => {
  // }, [active])
  const heightAnimation: ThemeUICSSObject = {
    transitionProperty: 'max-height',
    overflow: 'auto',
    overflowY: 'hidden',
    maxHeight: active ? '100%' :'0px',
    animationDuration: '300ms',
    animationTimingFunction: 'ease-in-out'
  }
  const accordionButtonStyles: ThemeUICSSObject = {
    paddingY: '1.5rem',
    boxSizing: 'border-box',
    appearance: 'none',
    cursor: 'pointer',
    '&:focus': {
      outline: '2px solid transparent',
      outlineOffset: '2px'
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
  return (
    <Flex sx={{flexDirection: 'column'}}>
      <Button
        sx={accordionButtonStyles}
        onClick={toggleAccordion}
      >
        <Text>{title}</Text>
        <Text>V</Text>
      </Button>
      <div sx={heightAnimation}>
        <div sx={{pb: '2.5rem'}}>{content}</div>
      </div>
    </Flex>
  )

}

export default Accordion;

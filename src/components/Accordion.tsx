 /** @jsxImportSource theme-ui */
import React, { useState, useLayoutEffect, useRef } from 'react';
import { Flex, Button, Text, Box, ThemeUICSSObject } from 'theme-ui'
import {buttonStyles, containerStyles, rotate, rotateBack} from '@styles/components/accordionStyles'
interface AccordionProps {
  title: React.ReactNode
  content: React.ReactNode
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
        sx={buttonStyles}
        onClick={toggleAccordion}
        ref={accordionButtonRef}
      >
        <Box sx={{width: '100%'}}>{title}</Box>
        <Text sx={rotationAnimation}>V</Text>
      </Button>
      <Box className={classNames} sx={containerStyles}>
        {content}
      </Box>
    </Flex>
  )
}

export default Accordion;

import React, { useState, useEffect } from 'react';

interface AccordionProps {
  title: React.ReactNode
  content: React.ReactNode
}

const Accordion : React.FC<AccordionProps> = ({ title, content }) => {
  const [active, setActive] = useState(false)
  const [rotate, setRotate] = useState('transform duration-700 ease')
  const [height, setHeight] = useState('overflow-auto overflow-y-hidden transition-max-height duration-300 ease-in-out max-h-0')

  function toggleAccordion() {
    setActive((prevState) => !prevState)
  }

  useEffect(() => {
    setRotate('transform duration-700 ease ' + (active ? 'rotate-180' : ''))
    setHeight('overflow-auto overflow-y-hidden transition-max-height duration-300 ease-in-out ' + (active ? `max-h-full` : 'max-h-0'))
  }, [active])
  
  return (
    <div className="flex flex-col">
      <button
        className="py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <p className="inline-block text-footnote light">{title}</p>
        <span className={rotate}>V</span>
      </button>
      <div className={height}>
        <div className="pb-10">{content}</div>
      </div>
    </div>
  )

}

export default Accordion;

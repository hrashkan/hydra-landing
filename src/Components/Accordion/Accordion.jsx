import React, { useState } from 'react'

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

import "./Accordion.css"

export default function Accordion({ item, toggleAccordion }) {

    const [accordionActive, setAccordionActive] = useState(false);

    const clickHandler = () => {
        toggleAccordion(item)
        setAccordionActive(prev => !prev)
    }

    return (
        <div className="accordion__item">
            <div className="accordion__item-head" onClick={clickHandler}>
                <h3 className="accordion__item-title">{item.question}</h3>
                {
                    accordionActive ? (
                        <AiOutlineMinus className='accordion__item-icon' />
                    ) : (
                        <AiOutlinePlus className='accordion__item-icon' />
                    )
                }

            </div>
            <p className={`accordion__item-description ${accordionActive ? 'active' : ''}`}>
                {item.answer}
            </p>
        </div>
    )
}

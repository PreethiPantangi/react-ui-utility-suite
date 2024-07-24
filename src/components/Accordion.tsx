import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa'
import '../index.css';

interface AccordionProps {
    title: string,
    isOpen: boolean,
    toggleAccordion: () => void,
    bordered?: boolean,
    children: React.ReactNode
}

const Accordion:React.FC<AccordionProps> = ({ title, isOpen, toggleAccordion, bordered=false, children }) => {

    return (
        <div className='accordion'>
            <div onClick={toggleAccordion} className='accordion-title'>
                <div>{title}</div>
                <div>
                    {
                        isOpen ? <FaMinus/> : <FaPlus/>
                    }
                </div>
            </div>
            {isOpen && <div className={`accordion-content ${bordered ? 'accordion-content-border' : ''}`}>{children}</div>}
        </div>
    )
}

export default Accordion;
import React from 'react';

interface AccordionProps {
    title: string;
    isOpen: boolean;
    toggleAccordion: () => void;
    bordered?: boolean;
    children: React.ReactNode;
}
declare const Accordion: React.FC<AccordionProps>;

type ButtonType = 'disabled' | 'warning' | 'success' | 'error' | 'default';
interface ButtonProps {
    title: string;
    type?: ButtonType;
    rounded?: boolean;
    action: () => void;
}
declare const Button: React.FC<ButtonProps>;

export { Accordion, Button };

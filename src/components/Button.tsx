import React from 'react';

type ButtonType = 'disabled' | 'warning' | 'success' | 'error' | 'default';

interface ButtonProps {
    title: string,
    type?: ButtonType,
    rounded?: boolean,
    action: () => void
}

const Button: React.FC<ButtonProps> = ({ title, action, type = 'default', rounded = false }) => {
    
    let className = 'btn';
    if (type === 'disabled') {
        className += ' button-disabled';
    } else if (type === 'warning') {
        className += ' button-warning';
    } else if (type === 'success') {
        className += ' button-success';
    } else if (type === 'error') {
        className += ' button-error';
    } else {
        className += ' button-default';
    }

    if (rounded) {
        className += ' button-rounded';
    }

    return (
        <button 
            className={className} 
            onClick={action} 
            disabled={type === 'disabled'}>
            {title}
        </button>
    );
}

export default Button;

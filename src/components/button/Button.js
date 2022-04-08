import React from 'react';

const Button = ({ className, text, action}) => {
    return (
        <button className={className} onClick={action} >
            {text}
        </button>
    );
}
export default Button;
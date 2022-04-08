import React from 'react';

const Input = ({ className, type, placeholder, autoComplete, value, action}) => {
    return (
        <input 
            className={className} 
            type={type} 
            placeholder={placeholder} 
            autoComplete={autoComplete}
            value={value}
            onChange={action}
        />
    );
}
export default Input;
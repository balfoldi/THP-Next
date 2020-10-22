import './index.scss';
import React from 'react';

const Button = ({ type = 'button', onClick, children, disabled = false }) => (
    <button className="Button" type={type} onClick={onClick} disabled={disabled} >
        {children}
    </button>
);

export default Button;

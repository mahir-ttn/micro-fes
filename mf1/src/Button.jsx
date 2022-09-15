import React from 'react';
import './Button.css';

const Button = ({ title = 'Click Button' }) => {
  return <button onClick={() => alert('Hello :)')}>{title}</button>;
};

export default Button;

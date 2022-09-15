import React from 'react';
import './style.css';

const TextBox = ({ text = 'MF2 Component' }) => {
  return (
    <div>
      <div className="box">{text}</div>
    </div>
  );
};

export default TextBox;

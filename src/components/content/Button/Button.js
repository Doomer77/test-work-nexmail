import React from 'react';

import './compose-button.css';

const Button = ({ label, icon }) => {
  return (
    <button className="btn" type='button'>
      {icon ? <img src={icon} alt="" className="btn__icon"/> : null}
      {label}
    </button>
  );
};

export default Button;
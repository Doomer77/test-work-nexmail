import React from 'react';

import './nav-item.css';

const NavItem = ({ active, name, icon, qnt}) => {
  return (
    <li className="navigation-item">
      <a href="/" className={active ? 'active' : 'navigation-item__link'}>
        <img className="navigation-item__icon" src={icon} alt=""/>
        <span className="navigation-item__name">{name} {qnt ? `(${qnt})` : ''}</span>
      </a>
    </li>
  );
};

export default NavItem;
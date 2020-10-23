import React from 'react';

import './nav-item.css';

const NavItem = ({ active, name, icon, qnt }) => {
  return (
    <div className={active ? 'active' : ''}>
      <div className="nav-item__name">{name}</div>
      <img src={icon} alt=""/>
      <div>{qnt}</div>
    </div>
  );
};

export default NavItem;
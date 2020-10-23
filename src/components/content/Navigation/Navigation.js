import React from 'react';

import './navigation.css';

const Navigation = ({ title, children }) => {
  return (
    <div className="navigation">
      <h2 className="navigation__title">{title}</h2>
      {children}
    </div>
  );
};

export default Navigation;
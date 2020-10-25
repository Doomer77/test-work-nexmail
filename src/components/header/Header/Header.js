import React from 'react';
import WindowControoler from '../WindowController'; 
import logoImg from '../../../img/Bitmap.png';

import './header.css';

const Header = () => {

  return(
    <header className='header'>
      <div className="controllers-box">
        <WindowControoler />
      </div>
      <div className="header__logo">
        <img src={logoImg} alt="nextmail" />
      </div>
    </header>
  )
}
export default Header;

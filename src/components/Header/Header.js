import React from 'react';
import WindowControoler from '../WindowController'; 
import src1 from '../../img/Bitmap.png';

import './header.css';

const Header = () => {

  return(
    <header className='header'>
      <div className="controllers-box">
        <WindowControoler />
      </div>
      <div className="logo-box">
        <img src={src1} alt="nextmail" />
      </div>
    </header>
  )
}
export default Header;

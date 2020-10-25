import React from 'react';
import Button from '../../user-panel/Button';  
import Navigation from '../../user-panel/Navigation';
import conposeIcon from '../../../../img/compose.svg';
import {navConf} from './config';
import NavItem from '../../user-panel/NavItem';

import './user-panel.css';

const UserPanel = () => {
  return (
    <aside className="user-panel">
      <Button label='Compose' icon={conposeIcon}/>
      <Navigation title="mailbox">
        {navConf.map((item) => {
          return(
            <NavItem {...item} />
          );
        })}
      </Navigation>
    </aside>
  );
};

export default UserPanel;
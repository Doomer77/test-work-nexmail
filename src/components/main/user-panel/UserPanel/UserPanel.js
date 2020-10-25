import React from 'react';
import Button from '../../user-panel/Button';  
import Navigation from '../../user-panel/Navigation';
import shape from '../../../../img/Shape.png';
import {navConf} from './config';
import NavItem from '../../user-panel/NavItem';

import './user-panel.css';

const UserPanel = () => {
  return (
    <aside className="user-panel">
      <Button label='Compose' icon={shape}/>
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
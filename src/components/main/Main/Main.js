import React from 'react';
import UserPanel from '../user-panel/UserPanel';
import MailBox from '../mail-box/MailBox';
import MailInfo from '../mail-info/MailInfo';


import './main.css';

const Main = () => {
  return (
    <main className="main">
      <UserPanel />
      <MailBox />
      <MailInfo />
    </main>
  )
};

export default Main;

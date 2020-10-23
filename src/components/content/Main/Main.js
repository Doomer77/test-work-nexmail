import React from 'react';
import UserPanel from '../UserPanel';
import MailBox from '../MailBox';
import MailInfo from '../MailInfo';


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

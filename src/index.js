import React from 'react';
import ReactDOM from 'react-dom';
import * as mobx from 'mobx'


import UserData from './applications/userDataApplication/SmartComponents/UserData';
import userDataService from './applications/userDataApplication/Services/UserDataService';
import Sidebar from './applications/sidebarApplication/SmartComponents/Sidebar';
import sidebarService from './applications/sidebarApplication/Services/SidebarService';
import tradingSignalsService from './applications/sidebarApplication/Services/TradingSignalsService';

console.log(mobx)


Promise.all([
  userDataService.start('main')
]).then(() => {
  ReactDOM.render(
    <UserData />,
    document.getElementById('app'),
  );
});

Promise.all([
  sidebarService.start('main'),
  tradingSignalsService.start('main')
]).then(() => {
  ReactDOM.render(
    <Sidebar />,
    document.getElementById('sidebar'),
  );
});


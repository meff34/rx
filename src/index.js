import React from 'react';
import ReactDOM from 'react-dom';

import UserData from './applications/userDataApplication/SmartComponents/UserData';
import userDataService from './applications/userDataApplication/Services/UserDataService';

Promise.all([
  userDataService.start('main')
]).then(() => {
  ReactDOM.render(
    <UserData />,
    document.getElementById('app'),
  );
});

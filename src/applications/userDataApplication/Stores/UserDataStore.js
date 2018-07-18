// @flow

import BaseStore from '../BaseService';


export default class UserDataStore extends BaseStore {
  config = {
    bindAs: 'UserDataStore',
  };

  api = {
    login: this.login,
    logout: this.logout,
  };

  login(userId) {
    this.callApi('USER_DATA_SERVICE', 'login', userId);
  }

  logout() {
    this.callApi('USER_DATA_SERVICE', 'logout');
  }
}

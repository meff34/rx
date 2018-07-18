import { observable, action } from 'mobx';
import BaseService from '../BaseService';

class UserDataService extends BaseService {
  config = {
    bindAs: 'USER_DATA_SERVICE'
  }

  api = {
    login: this.login,
    logout: this.logout,
  };

  @observable userId = null;

  @action login(userId) {
    this.userId = userId;
  }

  @action logout() {
    this.userId = null;
  }
}

export default new UserDataService();

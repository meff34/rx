import { BaseStore } from 'mobx-pack';
import { observable } from 'mobx';

class UserDataService extends BaseStore {
  config = {
    bindAs: 'APP_SERVICE'
  }

  @observable userId = null;

  @action login(userId) {
    this.userId = userId;
  }

  @action logout() {
    this.userId = null;
  }
}

export default new UserDataService();

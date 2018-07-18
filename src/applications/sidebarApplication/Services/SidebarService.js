import { observable, action } from 'mobx';
import BaseService from '../BaseService';

export class SidebarService extends BaseService {
  config = {
    bindAs: 'SIDEBAR_SERVICE'
  }

  @observable userId = null;


}

export default new SidebarService();

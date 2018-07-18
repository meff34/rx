// @flow

import { BaseStore, Binder, ServiceStarter } from 'mobx-pack';

const context = {
  binder: new Binder(),
  serviceStarter: new ServiceStarter(),
};

export default class BaseService extends BaseStore {
  constructor(contextParam) {
    super(contextParam && contextParam.binder ? contextParam : context);
  }
}

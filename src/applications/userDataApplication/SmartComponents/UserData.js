import UserData from '../components/UserData';
import { Connector } from 'mobx-pack';
import userDataService from '../Services/UserDataService';
import UserDataStore from '../Stores/UserDataStore';
import { observer } from 'mobx-react';

export default Connector(observer(UserData), {
  services: [userDataService],
  store: () => new UserDataStore(),
  helper: () => ({
    userId: userDataService.userId,
  })
});

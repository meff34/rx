import UserData from '../components/UserData';
import { Connector } from 'mobx-pack';
import userDataService from '../Services/UserDataService';

export default Connector(UserData, {
  services: [userDataService],
  helper: () => ({
    userId: userDataService.userId,
  })
});

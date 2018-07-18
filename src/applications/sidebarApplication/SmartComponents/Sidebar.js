import Sidebar from '../components/Sidebar';
import { Connector } from 'mobx-pack';
import sidebarService from '../Services/SidebarService';

export default Connector(Sidebar, {
  services: [sidebarService],
  helper: () => ({
    userId: sidebarService.userId,
  })
});

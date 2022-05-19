// import { withInstallFunction } from '@element-plus/utils';
import { withInstall } from '@/lib-components/utils/with-install';

import Notify from './src/notify';

const Notification = withInstall(Notify);
export default Notification;
export { Notification };

export * from './src/notification';

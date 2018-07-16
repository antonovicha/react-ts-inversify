import getDecorators from 'inversify-inject-decorators';

import myContainer from './inversify.config';

const { lazyInject } = getDecorators(myContainer);
export { lazyInject as inject};

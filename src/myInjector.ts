import myContainer from './inversify.config';

import getDecorators from 'inversify-inject-decorators';

const { lazyInject } = getDecorators(myContainer);
export { lazyInject as inject };

import container from './inversify.config';

import * as React from 'react';
import * as ReactDOM from 'react-dom';


import AppInfo from './AppInfo';
import { UserService } from './userService';

describe('AppInfo tests', () => {
  beforeEach(() => {
    const mock: UserService = {
      foo: () => {
        return 'I am injected mock of foo';
      }
    };
    // Option 1
    // container.get(UserService);
    // container.rebind<UserService>(UserService).toConstantValue(mock);
    // Option 2
    container.unbindAll();
    container.bind<UserService>(UserService).toConstantValue(mock);
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppInfo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('calls public method that calls service', () => {
    const sut = new AppInfo({});
    sut.handleClick();
  })
});


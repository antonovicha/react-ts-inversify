import './inversify.config.ts';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as sinon from "sinon";

import AppInfo from './AppInfo';
import { UserService } from './userService';

describe('AppInfo tests', () => {
  let sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppInfo />, div);
    ReactDOM.unmountComponentAtNode(div);
    const stub = sandbox.stub(UserService.prototype, "foo").callsFake(() => {
      console.log('I am foo in sinon sandbox fake'); // tslint:disable-line
    });
    expect(stub.notCalled).toBeTruthy();
  });

  test('calls public method that calls service', () => {
    const sut = new AppInfo({});
    const stub = sandbox.stub(UserService.prototype, "foo").callsFake(() => {
      console.log('I am foo in sinon sandbox fake'); // tslint:disable-line
    });
    sut.handleClick();
    expect(stub.calledOnce).toBeTruthy();
  })
});


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppInfo from './AppInfo';

describe('AppInfo tests', () => {
  beforeEach(() => {
    // TODO
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppInfo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});


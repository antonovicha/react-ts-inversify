import * as React from 'react';
import * as ReactDOM from 'react-dom';

import AppHelp from './AppHelp';
import { HelpService } from './helpService';
jest.mock('./helpService');

describe('AppHelp tests', () => {
  const helpService: jest.Mock<HelpService> = HelpService as any;

  beforeEach(() => {
    helpService.mockClear();
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppHelp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('calls public method that calls service', () => {
    // given
    helpService.mockImplementation(() => {
      return {
        helpMe: () => {
          return 'for mock';
        }
      }
    });
    const sut = new AppHelp({});
    
    // when
    const result = sut.handleClick();

    // then
    expect(result).toBe('HELP wanted for mock');
  })
});


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
// If you would prefer not to enable service workers prior to your initial production deployment,
// then remove the call to registerServiceWorker() from src/index.js.
// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#opting-out-of-caching
// registerServiceWorker();

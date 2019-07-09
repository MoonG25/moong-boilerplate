import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './configureStore';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import { ConnectedIntlProvider } from './ConnectedIntlProvider';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedIntlProvider>
      <ConnectedRouter history={history}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConnectedRouter>
    </ConnectedIntlProvider>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import 'config/ReactotronConfig';
import store from 'store';
import Routers from 'routes';

import Player from 'components/Player';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Routers />
      <Player />
    </Fragment>
  </Provider>
);

export default App;

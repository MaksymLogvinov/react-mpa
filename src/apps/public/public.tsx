
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store from 'stores/public/store';

import Contact from 'components/Contact';

ReactDOM.render(<Provider store={store}>
  <Contact framework='React' compiler='TypeScript' />
    </Provider>, document.getElementById('public'));

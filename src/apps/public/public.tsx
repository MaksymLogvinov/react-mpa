
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from '../../stores/public/store';
const store = createStore(rootReducer);

import Contact from 'components/Contact';

ReactDOM.render(<Provider store={store}>
  <Contact framework='React' compiler='TypeScript' />
    </Provider>, document.getElementById('public'));

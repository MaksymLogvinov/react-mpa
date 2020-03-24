
import createSagaMiddleware from 'redux-saga'
import { userReducer } from './reducer';
import userSaga from './saga';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  user: userReducer,
});

// create the composing function for our middlewares
const composeEnhancers = composeWithDevTools({})
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

// initialize saga
sagaMiddleware.run(userSaga);

export default store;

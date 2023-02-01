import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

// const loggerMiddleware = (store) => (next) => (action) => { // curry function
//   if (!action.type) return next(action);
//   console.log('type: ', action.type);
//   console.log('payload: ', action.payload);
//   console.log('current state: ', store.getState());

//   next(action); // this is synchronous.

//   console.log('next state: ', store.getState());
// };

const middlewares = [logger];
// const middlewares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers);

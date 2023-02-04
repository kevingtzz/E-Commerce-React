import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
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

const middlewares = [
  process.env.NODE_ENV !== 'production' && logger,
  thunk,
].filter(Boolean);

const composedEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
// const middlewares = [loggerMiddleware];

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['user'],
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composedEnhancer(applyMiddleware(...middlewares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);

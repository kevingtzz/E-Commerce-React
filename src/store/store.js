import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';
import logger from 'redux-logger';

import { rootSaga } from './root-saga';

import { rootReducer } from './root-reducer';

// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) return next(action);
//   console.log('type: ', action.type);
//   console.log('payload: ', action.payload);
//   console.log('current state: ', store.getState());

//   next(action); // this is synchronous.

//   console.log('next state: ', store.getState());
// };

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['user'],
  whitelist: ['cart'],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [
  process.env.NODE_ENV !== 'production' && logger,
  // thunk,
  sagaMiddleware,
].filter(Boolean);

const composedEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
// const middlewares = [loggerMiddleware];

const composedEnhancers = composedEnhancer(applyMiddleware(...middlewares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import setAuthToken from './utils/setAuthToken';

import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key:'root',
  storage,
  blacklist: ['alert','transaction']
}
const persistedReducer = persistReducer(persistConfig,rootReducer)

const initialState = {};

const middleware = [thunk];

const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);


//
const persistor = persistStore(store)
// set up a store subscription listener
// to store the users token in localStorage

// prevent auth error on first run of subscription
let currentState = {
  auth: { token: null, isAuthenticated: null, loading: true, user: null }
};

store.subscribe(() => {
  // keep track of the previous and current state to compare changes
  let previousState = currentState;
  currentState = store.getState();
  // if the token changes set the value in localStorage and axios headers
  if (previousState.auth.token !== currentState.auth.token) {
    const token = currentState.auth.token;
    setAuthToken(token);
  }
});

export  {store,persistor};
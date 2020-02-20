import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { rootReducer } from './rootReducer';
import { loadState, saveState } from '../../helpers/stateInLocalStorage/stateInLocalStorage';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const persistedState = loadState();

export const store = createStoreWithMiddleware(
  rootReducer,
  persistedState,
  // @ts-ignore
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => {
  saveState({
   login: {
    token: store.getState().login.token,
   }
  })
})
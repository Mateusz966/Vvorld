import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { loadState, saveState } from '../../helpers/stateInLocalStorage/stateInLocalStorage';
const persistedState = loadState();


export const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState
});

store.subscribe(() => {
  saveState({
    auth: {
      token: store.getState().auth.token,
    }
  });
});
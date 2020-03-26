import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { loadState, saveState } from '../../helpers/stateInLocalStorage/stateInLocalStorage';
const persistedState = loadState();


export const store = configureStore({
   reducer: rootReducer,
   middleware: persistedState,
});

store.subscribe(() => {
  saveState({
   login: {
    token: store.getState().auth.token,
   }
  })
})
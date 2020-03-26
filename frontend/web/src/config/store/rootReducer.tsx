import { combineReducers } from "redux";
import loginReducer from '../../modules/Login/login.slice';

export const rootReducer = combineReducers({
 auth: loginReducer,
});

export type RootState = ReturnType<typeof rootReducer>

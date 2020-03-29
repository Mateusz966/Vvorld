import { combineReducers } from "redux";
import loginReducer from '../../modules/Login/login.slice';
import citiesReducer from '../../shared/state/cities.slice';

export const rootReducer = combineReducers({
 auth: loginReducer,
 cities: citiesReducer,
});

export type RootState = ReturnType<typeof rootReducer>

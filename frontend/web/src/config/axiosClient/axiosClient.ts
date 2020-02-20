import axios from "axios";
import { createBrowserHistory } from "history";
 
const history = createBrowserHistory();
const baseURL = process.env.NODE_ENV === ('development' || 'test') ? 'http://127.0.0.1:8000' : '';

// Axios default configuration below

export const api = axios.create({
  baseURL,
  headers: {
    
  }
});

api.interceptors.response.use(undefined, (error) => {
  if (error.response.status === 401) {
    history.push('client-login');
  } 
  return Promise.reject(error);
});
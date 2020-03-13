import axios from "axios";
import { createBrowserHistory } from "history";
 
const history = createBrowserHistory();
const baseURL = process.env.NODE_ENV === ('development' || 'test') ? 'localhost:3300' : '';

// Axios default configuration below

export const axiosClient = axios.create({
  baseURL,
  headers: {
    
  }
});

axiosClient.interceptors.response.use(undefined, (error) => {
  if (error.response.status === 401) {
    history.push('sign-in');
  } 
  return Promise.reject(error);
});
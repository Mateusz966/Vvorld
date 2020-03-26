import { axiosClient  } from '../config/axiosClient/axiosClient';


interface RegsiterUser {
  email: string,
  password: string,
  passwordConfirmation: string,
  mobilePhone?: string,
}

interface LoginUser {
  email: string,
  password: string,
}


const signInApi = '/auth/sign-in';
const signUpApi = '/auth/sign-up';

export default class AuthApi {
  async signUp(user: RegsiterUser) {
    try {
      const response = await axiosClient.post(signUpApi, user);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async signIn(user: LoginUser) {
    try {
      const response = await axiosClient.post(signInApi, user);
      return response.data;
    } catch (error) {
      throw error   
    }
  }
}
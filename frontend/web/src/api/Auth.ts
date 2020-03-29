import { axiosClient  } from '../config/axiosClient/axiosClient';
import { RegisterUserData, LoginUserData } from '../helpers/types';

const signInApi = '/auth/sign-in';
const signUpApi = '/auth/sign-up';

export default class AuthApi {
  async signUp(user: RegisterUserData): Promise<void> {
    try {
      const response = await axiosClient.post(signUpApi, user);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async signIn(user: LoginUserData): Promise<string> {
    try {
      const response = await axiosClient.post(signInApi, user);
      return response.data;
    } catch (error) {
      throw error   
    }
  }
}
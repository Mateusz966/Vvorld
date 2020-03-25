import { axiosClient  } from '../config/axiosClient/axiosClient';


interface IRegsiterUser {
  email: string,
  password: string,
  passwordConfirmation: string,
  mobilePhone?: string,
}


const signInApi = '/auth/sign-in';
const signUpApi = '/auth/sign-up'

export default class AuthApi {
  async signUp(user: IRegsiterUser) {
    const response = await axiosClient.post(signUpApi, user);
    return response.data;
  }
}
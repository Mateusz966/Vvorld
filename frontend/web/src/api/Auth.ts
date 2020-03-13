import { axiosClient  } from '../config/axiosClient/axiosClient';


interface IRegsiterUser {
  email: string,
  password: string,
  passwordConfirmation: string,
  mobilePhone?: string,
}


const signInApi = '/auth/signin';
const signUpApi = '/auth/signup'

export default class AuthApi {
  async signUp(user: IRegsiterUser) {
    const response = await axiosClient.post(signInApi, user);
    return response.data;
  }
}
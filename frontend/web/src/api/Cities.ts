import { axiosClient  } from '../config/axiosClient/axiosClient';
import { City } from '../helpers/types';

const getCitiesEndpoint = '/cities';

export default class AuthApi {
  async getCities(): Promise<City[]> {
    try {
      const response = await axiosClient.get(getCitiesEndpoint);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
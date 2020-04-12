import { axiosClient  } from '../config/axiosClient/axiosClient';

const getBrandsEndpoints = '/brands';

export default class AuthApi {
  async getBrands(): Promise<any[]> {
    try {
      const response = await axiosClient.get(getBrandsEndpoints);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
import { axios } from '../../core/axios';

interface ResponseApi {
  status: string;
  data: any;
}

export const UsersApi = {
  async getUsers(): Promise<ResponseApi> {
    const { data } = await axios.get<ResponseApi>('/users/index');
    return data;
  },
};

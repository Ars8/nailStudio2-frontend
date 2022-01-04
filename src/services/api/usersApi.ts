import { axios } from '../../core/axios';
import { User } from '../../store/ducks/user/contracts/state';

interface Response<T> {
  status: string;
  data: T;
}

export const UsersApi = {
  async fetchUsers(): Promise<User[]> {
    const { data } = await axios.get<Response<User[]>>('/masters');
    return data.data;
  },
};
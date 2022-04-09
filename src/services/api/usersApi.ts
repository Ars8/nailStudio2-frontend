import axios from "axios";
import {User} from "../../store/ducks/user/contracts/state"

interface Response<T> {
  status: string;
  data: T;
}

export const UsersApi = {
  async fetchUsers() {
    try {
      const response = await axios.get('./users.json');
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  },
  async fetchMaster(userId?: string): Promise<User> {
    const { data } = await axios.get<Response<User>>(`./users.json`);
    return data.data;
  }
}

/* Use this code below, when will be connect with backend */

/* import { axios } from '../../core/axios';
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
  async fetchMaster(userId?: string): Promise<User> {
    const { data } = await axios.get<Response<User>>(`/masters/${userId}`);
    return data.data;
  }
}; */
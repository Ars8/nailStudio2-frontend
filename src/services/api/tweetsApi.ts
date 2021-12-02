import { axios } from '../../core/axios';
import { Tweet } from '../../store/ducks/events/contracts/state';

interface Response<T> {
  status: string;
  data: T;
}

export const TweetsApi = {
  async addTweet(payload: { text: string; images: string[] }): Promise<Tweet> {
    const { data } = await axios.post<Response<Tweet>>('/tweets', payload);
    return data.data;
  },
};

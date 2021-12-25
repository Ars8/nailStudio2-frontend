import { axios } from '../../core/axios';
import { Tweet } from '../../store/ducks/events/contracts/state';

interface Response<T> {
  status: string;
  data: T;
}

export const TweetsApi = {
  async fetchTweets(userId?: string): Promise<Tweet[]> {
    const { data } = await axios.get<Response<Tweet[]>>(
      userId ? `/tweets/user/${userId}` : '/tweets',
    );
    return data.data;
  },
  async addTweet(payload: { author: string; guest: string; date: string; description: string }): Promise<Tweet> {
    const { data } = await axios.post<Response<Tweet>>('/tweets', payload);
    return data.data;
  },
};

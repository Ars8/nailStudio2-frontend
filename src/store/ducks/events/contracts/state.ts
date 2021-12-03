import { LoadingStatus } from '../../../types';

export enum AddFormState {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface Tweet {
  _id: string;
  author: string;
  guest: string;
  date: string;
  description: string;
}

export interface TweetsState {
  items: Tweet[];
  LoadingStatus: LoadingStatus;
  addFormState: AddFormState;
}

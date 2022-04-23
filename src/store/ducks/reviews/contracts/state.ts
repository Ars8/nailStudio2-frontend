import { LoadingStatus } from "../../../types";

export enum AddFormState {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

interface Review {
  author: string;
  review: string;
  date: string;
  avatar: string;
}

export interface ReviewsState {
  items: Review[];
  LoadingStatus: LoadingStatus;
  addFormState: AddFormState;
}
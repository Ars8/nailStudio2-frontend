import { LoadingStatus } from "../../../types";

export enum AddFormState {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface Price {
  category: string;
  description: string;
  cost: string;
  currency: string;
}

export interface PriceState {
  items: Price[];
  LoadingStatus: LoadingStatus;
  addFormState: AddFormState;
}
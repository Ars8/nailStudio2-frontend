import { LoadingStatus } from "../../../types";
import { User } from "../../user/contracts/state";

export enum AddFormState {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface UsersState {
  items: User[];
  LoadingStatus: LoadingStatus;
  addFormState: AddFormState;
}
import { LoadingStatus } from "../../../types";
import { User } from "../../user/contracts/state";

export enum AddFormState {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface MasterState {
  items: User | undefined;
  LoadingStatus: LoadingStatus;
  addFormState: AddFormState;
}
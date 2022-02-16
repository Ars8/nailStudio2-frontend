import { LoadingStatus } from "../../../types";

export interface User {
  _id?: string;
  email: string;
  fullname: string;
  username: string;
  password: string;
  confirmHash: string;
  confirmed?: boolean;
  workingHours?: [number];
}

export interface UserState {
  data: User | undefined;
  status: LoadingStatus;
}
import { LoadingStatus } from "../../../types";
import { User } from "../../user/contracts/state";

export enum AddFormState {
  LOADING ='LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface Appointment {
  _id: string;
  appointmentDate: Date;
  appointmentTime: string;
  toMaster: User;
}

export interface AppointmentsState {
  items: Appointment[];
  LoadingStatus: LoadingStatus;
  addFormState: AddFormState;
}
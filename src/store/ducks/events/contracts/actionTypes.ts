import { Action } from "redux";
import { LoadingStatus } from "../../../types";
import { AddFormState, Appointment, AppointmentsState } from "./state";

export enum AppointmentsActionsType {
  FETCH_APPOINTMENTS = 'appointments/FETCH_APPOINTMENTS',
  SET_APPOINTMENTS = 'appointments/SET_APPOINTMENTS',
  SET_LOADING_STATE = 'appointments/SET_LOADING_STATE',
  FETCH_ADD_APPOINTMENT = 'appointments/FETCH_ADD_APPOINTMENT',
  ADD_APPOINTMENT = 'appointments/ADD_APPOINTMENT',
  SET_ADD_FORM_STATE = 'appointments/SET_ADD_FORM_STATE',
}

export interface FetchAppointmentsActionInterface extends Action<AppointmentsActionsType> {
  type: AppointmentsActionsType.FETCH_APPOINTMENTS;
}

export interface SetAppointmentsActionInterface extends Action<AppointmentsActionsType> {
  type: AppointmentsActionsType.SET_APPOINTMENTS;
  payload: AppointmentsState['items'];
}

export interface SetAppointmentsLoadingStatusActionInterface extends Action<AppointmentsActionsType> {
  type: AppointmentsActionsType.SET_LOADING_STATE;
  payload: LoadingStatus;
}

export interface FetchAddAppointmentActionInterface extends Action<AppointmentsActionsType> {
  type: AppointmentsActionsType.FETCH_ADD_APPOINTMENT;
  payload: {
    appointmentDate: Date;
    toMaster: string | undefined;
  };
}

export interface AddAppointmentActionInterface extends Action<AppointmentsActionsType> {
  type: AppointmentsActionsType.ADD_APPOINTMENT;
  payload: Appointment;
}

export interface SetAddFormStateActionInterface extends Action<AppointmentsActionsType> {
  type: AppointmentsActionsType.SET_ADD_FORM_STATE;
  payload: AddFormState;
}
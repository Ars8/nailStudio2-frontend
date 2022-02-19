import { LoadingStatus } from "../../types";
import { 
  AddAppointmentActionInterface,
  AppointmentsActionsType, 
  FetchAddAppointmentActionInterface, 
  FetchAppointmentsActionInterface, 
  SetAddFormStateActionInterface, 
  SetAppointmentsActionInterface, 
  SetAppointmentsLoadingStatusActionInterface 
} from "./contracts/actionTypes";
import { AddFormState, Appointment, AppointmentsState } from "./contracts/state";

export const fetchAppointment = (): FetchAppointmentsActionInterface => ({
  type: AppointmentsActionsType.FETCH_APPOINTMENTS,
});

export const setAppointments = (payload: AppointmentsState['items']): SetAppointmentsActionInterface => ({
  type: AppointmentsActionsType.SET_APPOINTMENTS,
  payload,
});

export const setAppointmentsLoadingStatus = (payload: LoadingStatus): SetAppointmentsLoadingStatusActionInterface => ({
  type: AppointmentsActionsType.SET_LOADING_STATE,
  payload,
})

export const fetchAddAppointment = (payload: {
  appointmentDate: Date;
  toMaster: string | undefined;
}): FetchAddAppointmentActionInterface => ({
  type: AppointmentsActionsType.FETCH_ADD_APPOINTMENT,
  payload,
});

export const addAppointment = (payload: Appointment): AddAppointmentActionInterface => ({
  type: AppointmentsActionsType.ADD_APPOINTMENT,
  payload,
});

export const setAddFormState = (payload: AddFormState): SetAddFormStateActionInterface => ({
  type: AppointmentsActionsType.SET_ADD_FORM_STATE,
  payload,
});

export type AppointmentsActions = 
| FetchAppointmentsActionInterface 
| SetAppointmentsActionInterface 
| SetAppointmentsLoadingStatusActionInterface
| FetchAddAppointmentActionInterface
| SetAddFormStateActionInterface;
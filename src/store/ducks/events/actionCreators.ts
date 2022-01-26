import { LoadingStatus } from "../../types";
import { 
  AppointmentsActionsType, 
  FetchAppointmentsActionInterface, 
  SetAppointmentsActionInterface, 
  SetAppointmentsLoadingStatusActionInterface 
} from "./contracts/actionTypes";
import { AppointmentsState } from "./contracts/state";

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

export type AppointmentsActions = 
| FetchAppointmentsActionInterface 
| SetAppointmentsActionInterface 
| SetAppointmentsLoadingStatusActionInterface;
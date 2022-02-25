import { RootState } from "../../store";
import { LoadingStatus } from "../../types";
import { AppointmentsState } from "./contracts/state";


export const selectAppointmentsState = (state: RootState): AppointmentsState => state.events;

export const selectAppointmentsItems = (state: RootState) => selectAppointmentsState(state).items;

export const selectLoadingStatus = (state: RootState): LoadingStatus =>
selectAppointmentsState(state).LoadingStatus;

export const selectIsAppointmentsLoaded = (state: RootState): boolean =>
  selectLoadingStatus(state) === LoadingStatus.LOADED;
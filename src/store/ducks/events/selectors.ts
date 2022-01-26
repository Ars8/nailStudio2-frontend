import { RootState } from "../../store";
import { AppointmentsState } from "./contracts/state";


export const selectAppointmentsState = (state: RootState): AppointmentsState => state.events;

export const selectAppointmentsItems = (state: RootState) => selectAppointmentsState(state).items;
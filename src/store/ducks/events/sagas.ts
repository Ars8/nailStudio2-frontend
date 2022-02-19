import { call, put, takeLatest } from "redux-saga/effects";
import { AppointmentsApi } from "../../../services/api/appointmentApi";
import { LoadingStatus } from "../../types";
import { addAppointment, setAddFormState, setAppointments, setAppointmentsLoadingStatus } from "./actionCreators";
import { AppointmentsActionsType, FetchAddAppointmentActionInterface } from "./contracts/actionTypes";
import { AddFormState } from "./contracts/state";


export function* fetchAppointmentsRequest(): Generator {
  try {
    const pathname = window.location.pathname;
    const userId = pathname.includes('/masters/appointment') ? pathname.split('/').pop() : undefined;
    const items: any = yield call(AppointmentsApi.fetchAppointments, userId);
    yield put(setAppointments(items));
  } catch (error) {
    yield put(setAppointmentsLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* fetchAddAppointmentRequest({ payload }: FetchAddAppointmentActionInterface): Generator {
  try {
    const item: any = yield call(AppointmentsApi.addAppointment, payload);
    yield put(addAppointment(item));
  } catch (error) {
    yield put(setAddFormState(AddFormState.ERROR));
  }
}

export function* appointmentsSaga() {
  yield takeLatest(AppointmentsActionsType.FETCH_APPOINTMENTS, fetchAppointmentsRequest);
  yield takeLatest(AppointmentsActionsType.FETCH_ADD_APPOINTMENT, fetchAddAppointmentRequest)
}
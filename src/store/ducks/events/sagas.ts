import { call, put, takeLatest } from "redux-saga/effects";
import { AppointmentsApi } from "../../../services/api/appointmentApi";
import { LoadingStatus } from "../../types";
import { setAppointments, setAppointmentsLoadingStatus } from "./actionCreators";
import { AppointmentsActionsType } from "./contracts/actionTypes";


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

export function* appointmentsSaga() {
  yield takeLatest(AppointmentsActionsType.FETCH_APPOINTMENTS, fetchAppointmentsRequest);
}
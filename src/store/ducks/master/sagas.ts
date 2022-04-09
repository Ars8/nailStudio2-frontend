import { call, put, takeLatest } from "redux-saga/effects";
import {UsersApi} from "../../../services/api/usersApi";
import { LoadingStatus } from "../../types";
import { setMaster, setMasterLoadingStatus } from "./actionCreators";
import { MasterActionType } from "./contracts/actionTypes";

export function* fetchMasterRequest(): Generator {
  try {
    const pathname = window.location.pathname;
    const userId = pathname.includes('/masters') ? pathname.split('/').pop() : undefined;
    const items: any = yield call(UsersApi.fetchMaster, userId);
    yield put(setMaster(items));
  } catch (error) {
    yield put(setMasterLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* masterSaga() {
  yield takeLatest(MasterActionType.FETCH_MASTER, fetchMasterRequest);
}

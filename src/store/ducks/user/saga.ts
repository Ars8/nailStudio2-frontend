import { call, put, takeLatest } from "@redux-saga/core/effects";
import { AuthApi } from "../../../services/api/authApi";
import { LoadingStatus } from "../../types";
import { setUserLoadingStatus, setUserData } from "./actionCreators"
import { FetchLogInActionInterface, FetchSignUpActionInterface, UserActionsType } from "./contracts/actionTypes";


export function* fetchLogInRequest({ payload }: FetchLogInActionInterface) {
  try {
    yield put(setUserLoadingStatus(LoadingStatus.LOADING));
    const { data } = yield call(AuthApi.logIn, payload);
    window.localStorage.setItem('token', data.token);
    yield put(setUserData(data));
  } catch (error) {
    yield put(setUserLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* fetchSignUpRequest({ payload }: FetchSignUpActionInterface) {
  try {
    yield put(setUserLoadingStatus(LoadingStatus.LOADING));
    yield call(AuthApi.signUp, payload);
    yield put(setUserLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    yield put(setUserLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* userSaga() {
  yield takeLatest(UserActionsType.FETCH_LOG_IN, fetchLogInRequest);
  yield takeLatest(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest);
}
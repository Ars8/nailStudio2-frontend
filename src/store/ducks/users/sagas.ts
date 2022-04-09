import { call, put, takeLatest } from "redux-saga/effects";
import {UsersApi} from "../../../services/api/usersApi";
import { LoadingStatus } from "../../types";
import { setUsers, setUsersLoadingStatus } from "./actionCreators";
import { UsersActionType } from "./contracts/actionTypes";

export function* fetchUsersRequest(): Generator {
  try {
    const items: any = yield call(UsersApi.fetchUsers);
    console.log(items);
    yield put(setUsers(items));
  } catch (error) {
    yield put(setUsersLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* usersSaga() {
  yield takeLatest(UsersActionType.FETCH_USERS, fetchUsersRequest);
}

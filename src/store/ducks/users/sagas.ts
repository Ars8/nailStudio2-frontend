import { call, put, takeLatest } from 'redux-saga/effects';
import { UsersApi } from '../../../services/api/usersApi';
import { LoadingStatus } from '../../types';
import { setUserLoadingStatus } from '../user/actionCreators';
import { setUsers, UsersActionsType } from './actionCreators';

export function* fetchUsersRequest() {
  try {
    yield put(setUserLoadingStatus(LoadingStatus.LOADING));
    const { data } = yield call(UsersApi.getUsers);
    yield put(setUsers(data));
  } catch (error) {
    yield put(setUserLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* usersSaga() {
  yield takeLatest(UsersActionsType.FETCH_ITEMS, fetchUsersRequest);
}

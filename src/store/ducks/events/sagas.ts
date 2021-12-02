import { call, put, takeLatest } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetsApi';
import {
  addTweet,
  setAddFormState,
} from './actionCreators';
import {
  FetchAddTweetActionInterface,
  TweetsActionsType,
} from './contracts/actionTypes';
import { AddFormState } from './contracts/state';

export function* fetchAddTweetRequest({ payload }: FetchAddTweetActionInterface): Generator {
  try {
    const item: any = yield call(TweetsApi.addTweet, payload);
    yield put(addTweet(item));
  } catch (error) {
    yield put(setAddFormState(AddFormState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}

import { call, put, takeLatest } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { LoadingStatus } from '../../types';
import {
  addTweet,
  setAddFormState,
  setTweets,
  setTweetsLoadingStatus,
} from './actionCreators';
import {
  FetchAddTweetActionInterface,
  TweetsActionsType,
} from './contracts/actionTypes';
import { AddFormState } from './contracts/state';

export function* fetchTweetsRequest(): Generator {
  try {
    const pathname = window.location.pathname;
    const userId = pathname.includes('/user') ? pathname.split('/').pop() : undefined;
    const items: any = yield call(TweetsApi.fetchTweets, userId);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetsLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* fetchAddTweetRequest({ payload }: FetchAddTweetActionInterface): Generator {
  try {
    const item: any = yield call(TweetsApi.addTweet, payload);
    yield put(addTweet(item));
  } catch (error) {
    yield put(setAddFormState(AddFormState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}

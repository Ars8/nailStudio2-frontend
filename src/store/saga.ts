import { all } from 'redux-saga/effects';
import { tweetsSaga } from './ducks/events/sagas';
import { userSaga } from './ducks/user/saga';
import { usersSaga } from './ducks/users/sagas';

export default function* rootSaga() {
  yield all([userSaga(), usersSaga(), tweetsSaga]);
}
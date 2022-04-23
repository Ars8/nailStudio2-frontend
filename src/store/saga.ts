import { all } from 'redux-saga/effects';
import { appointmentsSaga } from './ducks/events/sagas';
import { masterSaga } from './ducks/master/sagas';
import { reviewsSaga } from './ducks/reviews/sagas';
import { userSaga } from './ducks/user/saga';
import { usersSaga } from './ducks/users/sagas';

export default function* rootSaga() {
  yield all([userSaga(), usersSaga(), appointmentsSaga(), masterSaga(), reviewsSaga()]);
}
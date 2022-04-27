import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { AppointmentsState } from './ducks/events/contracts/state';
import { MasterState } from './ducks/master/contracts/state';
import { PriceState } from './ducks/price/contracts/state';
import { ReviewsState } from './ducks/reviews/contracts/state';
import { UserState } from './ducks/user/contracts/state';
import { UsersState } from './ducks/users/contracts/state';

import { rootReducer } from './rootReducer';
import rootSaga from './saga';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
  user: UserState;
  users: UsersState;
  events: AppointmentsState;
  master: MasterState;
  reviews: ReviewsState;
  price: PriceState;
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

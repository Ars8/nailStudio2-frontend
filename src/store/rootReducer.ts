import { combineReducers } from "redux";
import { appointmentsReducer } from "./ducks/events/reducer";
import { masterReducer } from "./ducks/master/reducer";
import { priceReducer } from "./ducks/price/reducer";
import { reviewsReducer } from "./ducks/reviews/reducer";
import { userReducer } from "./ducks/user/reducer";
import { usersReducer } from "./ducks/users/reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  events: appointmentsReducer,
  master: masterReducer,
  reviews: reviewsReducer,
  price: priceReducer,
});
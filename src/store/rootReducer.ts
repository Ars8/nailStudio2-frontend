import { combineReducers } from "redux";
import { tweetsReducer } from "./ducks/events/reducer";
import { userReducer } from "./ducks/user/reducer";
import { usersReducer } from "./ducks/users/reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  events: tweetsReducer,
});
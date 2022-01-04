import produce, { Draft } from "immer";
import { LoadingStatus } from "../../types";
import { UsersActions } from "./actionCreators";
import { UsersActionType } from "./contracts/actionTypes";
import { AddFormState, UsersState } from "./contracts/state";

const initialUsersState: UsersState = {
  items: [],
  addFormState: AddFormState.NEVER,
  LoadingStatus: LoadingStatus.NEVER,
}

export const usersReducer = produce((draft: Draft<UsersState>, action: UsersActions) => {
  switch (action.type) {
    case UsersActionType.SET_USERS:
      draft.items = action.payload;
      draft.LoadingStatus = LoadingStatus.LOADED;
      break;

    case UsersActionType.FETCH_USERS:
      draft.items = [];
      draft.LoadingStatus = LoadingStatus.LOADING;
      break;
    
    case UsersActionType.SET_LOADING_STATE:
      draft.LoadingStatus = action.payload;
      break;

    default:
      break;
  }
}, initialUsersState);
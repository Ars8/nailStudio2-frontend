import { LoadingStatus } from "../../types";
import { 
  FetchUserActionInterface, 
  FetchUsersActionInterface, 
  SetUsersActionInterface, 
  SetUsersLoadingStatusActionInterface, 
  UsersActionType 
} from "./contracts/actionTypes";
import { UsersState } from "./contracts/state";

export const setUsers = (payload: UsersState['items']): SetUsersActionInterface => ({
  type: UsersActionType.SET_USERS,
  payload,
})

export const fetchUsers = (): FetchUsersActionInterface => ({
  type: UsersActionType.FETCH_USERS,
})

export const fetchUser = ():FetchUserActionInterface => ({
  type: UsersActionType.FETCH_USER,
})

export const setUsersLoadingStatus = (payload: LoadingStatus): SetUsersLoadingStatusActionInterface => ({
  type: UsersActionType.SET_LOADING_STATE,
  payload,
})

export type UsersActions = FetchUsersActionInterface | SetUsersActionInterface | SetUsersLoadingStatusActionInterface;
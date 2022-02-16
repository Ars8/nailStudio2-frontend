import { Action } from 'redux';
import { LoadingStatus } from '../../../types';
import { UsersState } from './state';

export enum UsersActionType {
  SET_USERS = 'users/SET_USERS',
  FETCH_USERS = 'users/FETCH_USERS',
  FETCH_USER = 'users/FETCH_USER',
  SET_LOADING_STATE = 'users/SET_LOADING_STATE',
}

export interface SetUsersActionInterface extends Action<UsersActionType> {
  type: UsersActionType.SET_USERS;
  payload: UsersState['items'];
}

export interface FetchUsersActionInterface extends Action<UsersActionType> {
  type: UsersActionType.FETCH_USERS;
}

export interface FetchUserActionInterface extends Action<UsersActionType> {
  type: UsersActionType.FETCH_USER;
}

export interface SetUsersLoadingStatusActionInterface extends Action<UsersActionType> {
  type: UsersActionType.SET_LOADING_STATE;
  payload: LoadingStatus;
}
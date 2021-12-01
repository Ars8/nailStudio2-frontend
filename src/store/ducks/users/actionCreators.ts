import { Action } from 'redux';
import { User } from '../user/contracts/state';

export enum UsersActionsType {
  SET_ITEMS = 'users/SET_ITEMS',
  FETCH_ITEMS = 'users/FETCH_ITEMS',
}

export interface SetUsersItemsActionInterface extends Action<UsersActionsType> {
  type: UsersActionsType.SET_ITEMS;
  payload: User[];
}

export interface FetchUsersItemsActionInterface extends Action<UsersActionsType> {
  type: UsersActionsType.FETCH_ITEMS;
}

export const fetchUsersData = (): FetchUsersItemsActionInterface => ({
  type: UsersActionsType.FETCH_ITEMS,
});

export const setUsers = (payload: User[]): SetUsersItemsActionInterface => ({
  type: UsersActionsType.SET_ITEMS,
  payload,
});

export type UsersActions =
  | SetUsersItemsActionInterface
  | FetchUsersItemsActionInterface;

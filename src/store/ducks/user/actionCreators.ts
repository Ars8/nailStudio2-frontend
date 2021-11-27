import { LoginFormProps } from '../../../components/LoginForm';
import { RegisterFormProps } from '../../../components/RegisterForm';
import {
  FetchLogInActionInterface,
  FetchSignUpActionInterface,
  FetchUserDataActionInterface,
  SetUserDataActionInterface,
  SetUserLoadingStatusActionInterface,
  SignOutActionInterface,
  UserActionsType,
} from './contracts/actionTypes';
import { UserState } from './contracts/state';

export const setUserData = (payload: UserState['data']): SetUserDataActionInterface => ({
  type: UserActionsType.SET_USER_DATA,
  payload,
});

export const fetchLogIn = (payload: LoginFormProps): FetchLogInActionInterface => ({
  type: UserActionsType.FETCH_LOG_IN,
  payload,
});

export const fetchSignUp = (payload: RegisterFormProps): FetchSignUpActionInterface => ({
  type: UserActionsType.FETCH_SIGN_UP,
  payload,
});

export const setUserLoadingStatus = (
  payload: UserState['status'],
): SetUserLoadingStatusActionInterface => ({
  type: UserActionsType.SET_LOADING_STATE,
  payload,
});

export type UserActions =
  | SetUserDataActionInterface
  | SetUserLoadingStatusActionInterface
  | FetchUserDataActionInterface
  | SignOutActionInterface;

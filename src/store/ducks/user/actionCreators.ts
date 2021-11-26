import { LoginFormProps } from '../../../components/LoginForm';
import {
  FetchSignInActionInterface,
  FetchUserDataActionInterface,
  SetUserDataActionInterface,
  SetUserLoadingStatusActionInterface,
  SignOutActionInterface,
  UserActionsType,
} from './contracts/actionTypes';

export const fetchSignIn = (payload: LoginFormProps): FetchSignInActionInterface => ({
  type: UserActionsType.FETCH_SIGN_IN,
  payload,
});

export type UserActions =
  | SetUserDataActionInterface
  | SetUserLoadingStatusActionInterface
  | FetchUserDataActionInterface
  | SignOutActionInterface;

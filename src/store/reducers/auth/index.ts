import produce, { Draft } from "immer";
import { IUser } from "../../../models/IUser";
import { AuthAction, AuthActionEnum, AuthState } from "./types";


const initialState: AuthState = {
  isAuth: false,
  error: '',
  isLoading: false,
  user: {} as IUser
}

const authReducer = produce((draft: Draft<AuthState>, action: AuthAction) => {
  switch (action.type) {
    case AuthActionEnum.SET_AUTH:
      draft.isAuth = action.payload;
      draft.isLoading = false;
      break;

    case AuthActionEnum.SET_USER:
      draft.user = action.payload;      
      break;

    case AuthActionEnum.SET_ERROR:
      draft.error = action.payload;
      draft.isLoading = false;
      break;
      
    case AuthActionEnum.SET_IS_LOADING:
      draft.isLoading = action.payload;
      break;

    default:
      break;
  }
}, initialState);

export default authReducer;
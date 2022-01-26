import produce, {Draft} from "immer";
import { LoadingStatus } from "../../types";
import { AppointmentsActions } from "./actionCreators";
import { AppointmentsActionsType } from "./contracts/actionTypes";
import { AddFormState, AppointmentsState } from "./contracts/state";

const initialAppoinmentsState: AppointmentsState = {
  items: [],
  addFormState: AddFormState.NEVER,
  LoadingStatus: LoadingStatus.NEVER,
}

export const appointmentsReducer = produce((draft: Draft<AppointmentsState>, action: AppointmentsActions) => {
  switch (action.type) {
    case AppointmentsActionsType.FETCH_APPOINTMENTS:
      draft.items = [];
      draft.LoadingStatus = LoadingStatus.LOADED;
      break;

    case AppointmentsActionsType.SET_APPOINTMENTS:
      draft.items = action.payload;
      draft.LoadingStatus = LoadingStatus.LOADED;
      break;

    case AppointmentsActionsType.SET_LOADING_STATE:
      draft.LoadingStatus = action.payload;
      break;

      default:
        break;
  }
}, initialAppoinmentsState);
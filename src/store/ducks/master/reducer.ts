import produce, { Draft } from "immer";
import { LoadingStatus } from "../../types";
import { MasterActions } from "./actionCreators";
import { MasterActionType } from "./contracts/actionTypes";
import { AddFormState, MasterState } from "./contracts/state";

const initialMasterState: MasterState = {
  items: undefined,
  addFormState: AddFormState.NEVER,
  LoadingStatus: LoadingStatus.NEVER,
}

export const masterReducer = produce((draft: Draft<MasterState>, action: MasterActions) => {
  switch (action.type) {
    case MasterActionType.SET_MASTER:
      draft.items = action.payload;
      draft.LoadingStatus = LoadingStatus.LOADED;
      break;

    case MasterActionType.FETCH_MASTER:
      draft.LoadingStatus = LoadingStatus.LOADING;
      break;

    default:
      break;
  }
}, initialMasterState);
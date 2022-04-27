import produce, { Draft } from "immer";
import { LoadingStatus } from "../../types";
import { PriceActions } from "./actionCreators";
import { PriceActionType } from "./contracts/actionTypes";
import { AddFormState, PriceState } from "./contracts/state";

const initialPriceState: PriceState = {
  items: [],
  addFormState: AddFormState.NEVER,
  LoadingStatus: LoadingStatus.NEVER,
}

export const priceReducer = produce((draft: Draft<PriceState>, action: PriceActions) => {
  switch (action.type) {
    case PriceActionType.SET_PRICE:
      draft.items = action.payload;
      draft.LoadingStatus = LoadingStatus.LOADED;
      break;

    case PriceActionType.FETCH_PRICE:
      draft.items = [];
      draft.LoadingStatus = LoadingStatus.LOADING;
      break;
    
    case PriceActionType.SET_LOADING_STATE:
      draft.LoadingStatus = action.payload;
      break;

    default:
      break;
  }
}, initialPriceState);
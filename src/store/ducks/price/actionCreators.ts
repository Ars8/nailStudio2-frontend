import { LoadingStatus } from "../../types";
import { 
  FetchPriceActionInterface, 
  PriceActionType,
  SetPriceActionInterface,
  SetPriceLoadingStatusActionInterface
} from "./contracts/actionTypes";
import { PriceState } from "./contracts/state";


export const fetchPrice = (): FetchPriceActionInterface => ({
  type: PriceActionType.FETCH_PRICE,
})

export const setPrice = (payload: PriceState['items']): SetPriceActionInterface => ({
  type: PriceActionType.SET_PRICE,
  payload,
})

export const setPriceLoadingStatus = (payload: LoadingStatus): SetPriceLoadingStatusActionInterface => ({
  type: PriceActionType.SET_LOADING_STATE,
  payload,
})

export type PriceActions = FetchPriceActionInterface | SetPriceActionInterface | SetPriceLoadingStatusActionInterface;
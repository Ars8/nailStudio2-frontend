import { LoadingStatus } from "../../types";
import { 
  FetchMasterActionInterface, 
  MasterActionType, 
  SetMasterActionInterface, 
  SetMasterLoadingStatusActionInterface,
} from "./contracts/actionTypes";
import { MasterState } from "./contracts/state";

export const fetchMaster = ():FetchMasterActionInterface => ({
  type: MasterActionType.FETCH_MASTER,
})

export const setMaster = (payload: MasterState['items']): SetMasterActionInterface => ({
  type: MasterActionType.SET_MASTER,
  payload,
})

export const setMasterLoadingStatus = (payload: LoadingStatus): SetMasterLoadingStatusActionInterface => ({
  type: MasterActionType.SET_LOADING_STATE,
  payload,
})

export type MasterActions = FetchMasterActionInterface | SetMasterActionInterface;
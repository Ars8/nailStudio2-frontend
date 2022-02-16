import { Action } from 'redux';
import { LoadingStatus } from '../../../types';
import { MasterState } from './state';

export enum MasterActionType {
  SET_MASTER = 'master/SET_MASTER',
  FETCH_MASTER = 'master/FETCH_MASTER',
  SET_LOADING_STATE = 'master/SET_LOADING_STATE'
}

export interface SetMasterActionInterface extends Action<MasterActionType> {
  type: MasterActionType.SET_MASTER;
  payload: MasterState['items'];
}

export interface FetchMasterActionInterface extends Action<MasterActionType> {
  type: MasterActionType.FETCH_MASTER;
}

export interface SetMasterLoadingStatusActionInterface extends Action<MasterActionType> {
  type: MasterActionType.SET_LOADING_STATE;
  payload: LoadingStatus;
}
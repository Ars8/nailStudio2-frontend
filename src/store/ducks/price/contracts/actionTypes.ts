import { Action } from 'redux';
import { LoadingStatus } from '../../../types';
import { PriceState } from './state';

export enum PriceActionType {
  FETCH_PRICE = 'price/FETCH_PRICE',
  SET_PRICE = 'price/SET_PRICE',
  SET_LOADING_STATE = 'price/SET_LOADING_STATE',
}

export interface FetchPriceActionInterface extends Action<PriceActionType> {
  type: PriceActionType.FETCH_PRICE;
}

export interface SetPriceActionInterface extends Action<PriceActionType> {
  type: PriceActionType.SET_PRICE;
  payload: PriceState['items'];
}

export interface SetPriceLoadingStatusActionInterface extends Action<PriceActionType> {
  type: PriceActionType.SET_LOADING_STATE;
  payload: LoadingStatus;
}
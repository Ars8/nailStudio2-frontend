import { Action } from 'redux';
import { LoadingStatus } from '../../../types';
import { ReviewsState } from './state';

export enum ReviewsActionType {
  FETCH_REVIEWS = 'reviews/FETCH_REVIEWS',
  SET_REVIEWS = 'reviews/SET_REVIEWS',
  SET_LOADING_STATE = 'reviews/SET_LOADING_STATE',
}

export interface FetchReviewsActionInterface extends Action<ReviewsActionType> {
  type: ReviewsActionType.FETCH_REVIEWS;
}

export interface SetReviewsActionInterface extends Action<ReviewsActionType> {
  type: ReviewsActionType.SET_REVIEWS;
  payload: ReviewsState['items'];
}

export interface SetReviewsLoadingStatusActionInterface extends Action<ReviewsActionType> {
  type: ReviewsActionType.SET_LOADING_STATE;
  payload: LoadingStatus;
}
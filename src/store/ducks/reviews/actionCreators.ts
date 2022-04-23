import { LoadingStatus } from "../../types";
import { 
  FetchReviewsActionInterface, 
  ReviewsActionType,
  SetReviewsActionInterface,
  SetReviewsLoadingStatusActionInterface
} from "./contracts/actionTypes";
import { ReviewsState } from "./contracts/state";


export const fetchReviews = (): FetchReviewsActionInterface => ({
  type: ReviewsActionType.FETCH_REVIEWS,
})

export const setReviews = (payload: ReviewsState['items']): SetReviewsActionInterface => ({
  type: ReviewsActionType.SET_REVIEWS,
  payload,
})

export const setReviewsLoadingStatus = (payload: LoadingStatus): SetReviewsLoadingStatusActionInterface => ({
  type: ReviewsActionType.SET_LOADING_STATE,
  payload,
})

export type ReviewsActions = FetchReviewsActionInterface | SetReviewsActionInterface | SetReviewsLoadingStatusActionInterface;
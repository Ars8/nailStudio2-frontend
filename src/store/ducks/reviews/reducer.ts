import produce, { Draft } from "immer";
import { LoadingStatus } from "../../types";
import { ReviewsActions } from "./actionCreators";
import { ReviewsActionType } from "./contracts/actionTypes";
import { AddFormState, ReviewsState } from "./contracts/state";

const initialReviewsState: ReviewsState = {
  items: [],
  addFormState: AddFormState.NEVER,
  LoadingStatus: LoadingStatus.NEVER,
}

export const reviewsReducer = produce((draft: Draft<ReviewsState>, action: ReviewsActions) => {
  switch (action.type) {
    case ReviewsActionType.SET_REVIEWS:
      draft.items = action.payload;
      draft.LoadingStatus = LoadingStatus.LOADED;
      break;

    case ReviewsActionType.FETCH_REVIEWS:
      draft.items = [];
      draft.LoadingStatus = LoadingStatus.LOADING;
      break;
    
    case ReviewsActionType.SET_LOADING_STATE:
      draft.LoadingStatus = action.payload;
      break;

    default:
      break;
  }
}, initialReviewsState);
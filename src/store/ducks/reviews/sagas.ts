import { call, put, takeLatest } from "redux-saga/effects";
import { ReviewsApi } from "../../../services/api/reviewsApi";
import { LoadingStatus } from "../../types";
import { setReviews, setReviewsLoadingStatus } from "./actionCreators";
import { ReviewsActionType } from "./contracts/actionTypes";

export function* fetchReviewsRequest(): Generator {
  try {
    const items: any = yield call(ReviewsApi.fetchReviews);
    console.log(items);
    yield put(setReviews(items));
  } catch (error) {
    yield put(setReviewsLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* reviewsSaga() {
  yield takeLatest(ReviewsActionType.FETCH_REVIEWS, fetchReviewsRequest);
}

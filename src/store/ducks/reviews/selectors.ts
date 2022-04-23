import { RootState } from "../../store";
import { ReviewsState } from "./contracts/state";

export const selectReviewsState = (state: RootState): ReviewsState => state.reviews;

export const selectReviewsItems = (state: RootState) => selectReviewsState(state).items;
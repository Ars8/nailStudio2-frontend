import { call, put, takeLatest } from "redux-saga/effects";
import { PriceApi } from "../../../services/api/priceApi";
import { LoadingStatus } from "../../types";
import { setPrice, setPriceLoadingStatus } from "./actionCreators";
import { PriceActionType } from "./contracts/actionTypes";

export function* fetchPriceRequest(): Generator {
  try {
    const items: any = yield call(PriceApi.fetchPrice);
    console.log(items);
    yield put(setPrice(items));
  } catch (error) {
    yield put(setPriceLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* priceSaga() {
  yield takeLatest(PriceActionType.FETCH_PRICE, fetchPriceRequest);
}

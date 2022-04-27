import { RootState } from "../../store";
import { PriceState } from "./contracts/state";

export const selectPriceState = (state: RootState): PriceState => state.price;

export const selectPriceItems = (state: RootState) => selectPriceState(state).items;
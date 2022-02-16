import { RootState } from "../../store";
import { MasterState } from "./contracts/state";

export const selectMasterState = (state: RootState): MasterState => state.master;

export const selectMasterItems = (state: RootState) => selectMasterState(state).items;
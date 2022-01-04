import { RootState } from "../../store";
import { UsersState } from "./contracts/state";

export const selectUsersState = (state: RootState): UsersState => state.users;

export const selectUsersItems = (state: RootState) => selectUsersState(state).items;
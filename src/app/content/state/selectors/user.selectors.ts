import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { UserState } from "../../interfaces/user.interface";

export const selectUserFeature = (state: AppState) => state.user;

export const selectSponsoredLogin = createSelector(
    selectUserFeature,
    (state: UserState) => state.logged
)

export const selectUserData = createSelector(
    selectUserFeature,
    (state: UserState) => state.user
)


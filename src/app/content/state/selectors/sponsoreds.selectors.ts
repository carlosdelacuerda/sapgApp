import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { SponsoredState } from "../../interfaces/sponsored.interface";

export const selectSponsoredsFeature = (state: AppState) => state.sponsoreds;

export const selectSponsoredLoad = createSelector(
    selectSponsoredsFeature,
    (state: SponsoredState) => state.loading
)

export const selectSponsoredList = createSelector(
    selectSponsoredsFeature,
    (state: SponsoredState) => state.sponsoreds
)


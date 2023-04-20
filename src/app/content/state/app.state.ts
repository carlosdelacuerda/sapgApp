import { ActionReducerMap } from "@ngrx/store"
import { SponsoredState } from "../interfaces/sponsored.interface"
import { sponsoredReducer } from "./reducers/sponsoreds.reducers"

export interface AppState {
    sponsoreds: SponsoredState
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
    sponsoreds: sponsoredReducer
}
import { ActionReducerMap } from "@ngrx/store"
import { SponsoredState } from "../interfaces/sponsored.interface"
import { sponsoredReducer } from "./reducers/sponsoreds.reducers"
import { UserState } from "../interfaces/user.interface"
import { userReducer } from "./reducers/user.reducers"

export interface AppState {
    sponsoreds: SponsoredState,
    user: UserState
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
    sponsoreds: sponsoredReducer,
    user: userReducer
}
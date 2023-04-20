import { createReducer, on } from "@ngrx/store";
import { SponsoredModel, SponsoredState } from "../../interfaces/sponsored.interface";
import { loadSponsoreds, loadedSponsoreds } from "../actions/sponsoreds.actions";

export const initialState: SponsoredState = {
    loading: false,
    sponsoreds: []
    }

export const sponsoredReducer = createReducer (
    initialState,
    on(loadSponsoreds, (state) => {
        return { ...state, loading: true }
    }),
    on(loadedSponsoreds, (state, sponsoreds:any) => {
        return { ...state, loading: false, sponsoreds}
    })
)
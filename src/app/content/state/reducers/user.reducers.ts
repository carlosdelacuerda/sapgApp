import { createReducer, on } from "@ngrx/store";
import { UserState } from "../../interfaces/user.interface";
import { loadUser, loadedUser } from "../actions/user.actions";

export const initialState: UserState = {
    logged: false,
    user: {
        id: 0,
        userName: 'GUEST',
        name: '',
        lastName: '',
        birthDate: ''
    }
    }

export const userReducer = createReducer (
    initialState,
    on(loadUser, (state) => {
        return { ...state, logged: true }
    }),
    on(loadedUser, (state, user:any) => {
        return { ...state, user}
    })
)
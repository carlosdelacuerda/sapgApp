import {createAction, props} from '@ngrx/store';
import { UserLogin, UserModel } from '../../interfaces/user.interface';

export const loadUser = createAction (
    '[ User Data ] Load User',
    props<{
        payload: {
            name: string,
            password: string
        }
    }>()
)

export const loadedUser = createAction (
    '[ User Data ] Loaded Success',
    props<{user: UserModel}>()
)


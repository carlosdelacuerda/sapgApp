import {createAction, props} from '@ngrx/store';
import { UserLogin, UserModel } from '../../interfaces/user.interface';

export const loadUser = createAction (
    '[ User Data ] Load User',
)

export const loadedUser = createAction (
    '[ User Data ] Loaded Success',
    props<{user: UserModel}>()
)


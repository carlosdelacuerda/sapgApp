import {createAction, props} from '@ngrx/store';
import { SponsoredModel } from '../../interfaces/sponsored.interface';

export const loadSponsoreds = createAction (
    '[ Sponsoreds List ] Load Sponsoreds'
)

export const loadedSponsoreds = createAction (
    '[ Sponsoreds List ] Loaded Success',
    props<{sponsoreds: SponsoredModel[]}>()
)


import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SponsoredService } from "../../services/sponsored.service";
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

@Injectable()
export class SponsoredsEffects {
    
    loadSponsoreds$ = createEffect(() => this.actions$.pipe(
        ofType('[ Sponsoreds List ] Load Sponsoreds'),
        exhaustMap(() => this.sponsoredsService.getSponsoreds()
          .pipe(
            map(sponsoreds => ({ type: '[ Sponsoreds List ] Loaded Success', sponsoreds })),
            catchError(() => EMPTY)
          ))
        )
      );


    constructor (
        private actions$: Actions,
        private sponsoredsService: SponsoredService
    ){}
}
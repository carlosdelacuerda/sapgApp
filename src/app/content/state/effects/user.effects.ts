import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../../services/user.service";
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { UserLogin } from "../../interfaces/user.interface";

@Injectable()
export class UserEffects {
    
    loadUser$ = createEffect(() => this.actions$.pipe(
        ofType('[ User Data ] Load User'),
        exhaustMap(() => this.userService.postLogin('','')
          .pipe(
            map(user => ({ type: '[ User Data ] Loaded Success', user })),
            catchError(() => EMPTY)
          ))
        )
      );


    constructor (
        private actions$: Actions,
        private userService: UserService
    ){}
}
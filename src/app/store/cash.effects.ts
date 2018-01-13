import { Effect, Actions } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import * as cashActions from './cash.actions';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable()
export class CashEffects {
    @Effect() cashChange$: Observable<Action> = this.actions$
        .ofType(cashActions.INCREASE, cashActions.DECREASE)
        .do(action => console.log('action in effect', action))
        .map(action => new cashActions.IncreaseSuccessAction());

    constructor(private actions$: Actions) { }
}
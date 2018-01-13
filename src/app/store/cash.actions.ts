import { Action } from '@ngrx/store';

export const INCREASE = 'INCREASE';
export const INCREASE_SUCCESS = 'INCREASE_SUCCESS';
export const DECREASE = 'DECREASE';


export class IncreaseAction implements Action {
    type = INCREASE;
    constructor(public payload: number) { }
}

export class IncreaseSuccessAction implements Action {
    type = INCREASE_SUCCESS;
    constructor(public payload: any = null) { }
}

export class DecreaseAction implements Action {
    type = DECREASE;
    constructor(public payload: number) { }
}

export type Action = IncreaseAction | DecreaseAction;

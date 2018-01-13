import * as cashActions from './cash.actions';

export function cashReducer(state: number = 0, action: cashActions.Action) {
    switch (action.type) {
        case cashActions.INCREASE:
            return state + action.payload;
        case cashActions.DECREASE:
            return state - action.payload;
        default:
            return state;
    }
}

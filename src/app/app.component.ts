import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, IncreaseAction, DecreaseAction } from './store';
import { Actions } from '@ngrx/effects';
import { CashEffects } from './store/cash.effects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  cash$ = this.store.select('cash');
  cashDelta: number = 0;

  constructor(private store: Store<AppState>, private cashEffects: CashEffects) { }

  ngOnInit() {
    this.cashEffects.cashChange$
      .subscribe(action => {
        console.log('received action from effect', action);
      })
  }

  add() {
    this.store.dispatch(new IncreaseAction(this.cashDelta));
  }

  subtract() {
    this.store.dispatch(new DecreaseAction(this.cashDelta));
  }
}

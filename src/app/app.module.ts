import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppState, cashReducer } from './store/index';
import { CashEffects } from './store/cash.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot<AppState>({ cash: cashReducer }),
    EffectsModule.forRoot([CashEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

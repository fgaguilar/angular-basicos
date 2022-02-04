import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { contadoresModule } from './contadores/contadores.module';
import { HeroesModule } from './Heroes/Heroes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    contadoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

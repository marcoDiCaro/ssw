import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TeatroComponent } from './teatro/teatro.component';
import { NotificaComponent } from './notifica/notifica.component';
import { InserisciComponent } from './inserisci/inserisci.component';
import { TeatroService } from './services/teatro.service';
import { NewteatroComponent } from './newteatro/newteatro.component';

@NgModule({
  declarations: [
    AppComponent,
    TeatroComponent,
    NotificaComponent,
    InserisciComponent,
    NewteatroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TeatroService],
  bootstrap: [AppComponent]
})
export class AppModule { }

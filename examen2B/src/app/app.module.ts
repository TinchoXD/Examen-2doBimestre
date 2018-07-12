import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {InicioComponent} from './inicio/inicio.component';
import {AppRoutingModule} from './app.routes';
import { HomeComponent } from './home/home.component';
import { SOPadreComponent } from './so-padre/so-padre.component';
import { APPHijoComponent } from './app-hijo/app-hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    HomeComponent,
    SOPadreComponent,
    APPHijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers:
    [],
  bootstrap:
    [AppComponent]
})

export class AppModule {
}


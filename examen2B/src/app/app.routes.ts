import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
   exports: [RouterModule]
})

export class AppRoutingModule { }

import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component';
import { ModeloPapaComponent } from './modelo-papa/modelo-papa.component';
import { ModeloHijoComponent } from './modelo-hijo/modelo-hijo.component';
import { DetalleHijoComponent } from  './detalle-hijo/detalle-hijo.component'

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  // { path: '**', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'modeloPapa/modeloHijo', component: ModeloHijoComponent },
  { path: 'modeloPapa', component: ModeloPapaComponent,
    children: [ // rutas hijas, se verán dentro del componente padre
      {
        path: 'modeloHijo', // la ruta real es movimientos/nuevo
        component: ModeloHijoComponent,
        children: [ // rutas hijas, se verán dentro del componente padre
          {
            path: 'detalleHijo', // la ruta real es movimientos/nuevo
            component: DetalleHijoComponent
          },

        ]
      },

    ]
  },
  { path: 'home', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
   exports: [RouterModule]
})

export class AppRoutingModule { }

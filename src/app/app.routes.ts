import { Routes } from '@angular/router';
import { BusquedaComponent } from './paths/busqueda/busqueda.component';

export const routes: Routes = [
  {
    path: 'bienvenido',
    loadComponent: () =>
      import('./paths/bienvenido/bienvenido.component').then(
        (m) => m.BienvenidoComponent
      ),
  },
  {
    path: 'busqueda',
    loadComponent: () =>
      import('./paths/busqueda/busqueda.component').then((m) => m.BusquedaComponent),
  },
  {
    path: 'peliculas',
    loadChildren: () => import('./paths/peliculas.routes'),
  },
  {
    path: 'actor',
    loadChildren: () => import('./paths/actor.routes'),
  },

  
  { path: '**', component: BusquedaComponent},
];

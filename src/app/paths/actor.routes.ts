import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'alta',
    loadComponent: () =>
      import('./actor-alta/actor-alta.component').then(
        (m) => m.ActorAltaComponent
      ),
  },
  {
    path: 'listado',
    loadComponent: () =>
      import('../components/actor-listado/actor-listado.component').then(
        (m) => m.ActorListadoComponent
      ),
  },
  {
    path: 'pelicula',
    loadComponent: () =>
      import('./actor-pelicula/actor-pelicula.component').then(
        (m) => m.ActorPeliculaComponent
      ),
  },
];

export default routes;

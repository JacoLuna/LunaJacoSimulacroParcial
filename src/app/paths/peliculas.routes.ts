import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'alta',
        loadComponent: () =>
          import('./pelicula-alta/pelicula-alta.component').then(
            (m) => m.PeliculaAltaComponent
          ),
      },
];

export default routes;
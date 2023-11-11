import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'opcion-servicios',
    loadComponent: () => import('./opcion-servicios/opcion-servicios.page').then( m => m.OpcionServiciosPage)
  },
  {
    path: 'opcion-atracciones',
    loadComponent: () => import('./opcion-atracciones/opcion-atracciones.page').then( m => m.OpcionAtraccionesPage)
  },
  {
    path: 'opcion-ventaentradas',
    loadComponent: () => import('./opcion-ventaentradas/opcion-ventaentradas.page').then( m => m.OpcionVentaentradasPage)
  },
];

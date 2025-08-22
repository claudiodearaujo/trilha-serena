import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'numerologia/mapa/:nome/:dia/:mes/:ano',
    loadComponent: () => import('./pages/izabela-mapa-numerologico/izabela-mapa-numerologico').then(m => m.IzabelaMapaNumerologico)
  }
];

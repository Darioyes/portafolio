import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/page/dashboard/dashboard.component'),
        //title: 'Dashboard',
    },
    {
        //ruta que no existe
        path: '**',
        redirectTo: ''

    }
];

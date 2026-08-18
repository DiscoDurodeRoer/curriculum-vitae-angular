import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./features/curriculum-vitae/curriculum-vitae.routes').then(m => m.curriculumVitaeRoutes),
    }
];

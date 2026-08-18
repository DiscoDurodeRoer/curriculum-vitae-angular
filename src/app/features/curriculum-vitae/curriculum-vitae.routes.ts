import { Routes } from '@angular/router';

export const curriculumVitaeRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/curriculum-vitae/curriculum-vitae').then(c => c.CurriculumVitae),
    }
];
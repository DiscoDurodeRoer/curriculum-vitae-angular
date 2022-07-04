import { RepositoriesComponent } from './components/repositories/repositories.component';
import { CoursesUdemyComponent } from './components/courses-udemy/courses-udemy.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { StudiesComponent } from './components/studies/studies.component';
import { ExperienceComponent } from './components/experiences/experiences.component';
import { WorksComponent } from './components/works/works.component';
import { PersonalComponent } from './components/personal/personal.component';

const APP_ROUTES: Routes = [
    {path: 'inicio', component: HomeComponent },
    {path: 'contacto', component: ContactComponent },
    {path: 'datos-personales', component: PersonalComponent },
    {path: 'habilidades', component: SkillsComponent },
    {path: 'estudios', component: StudiesComponent },
    {path: 'experiencia-laboral', component: ExperienceComponent },
    {path: 'trabajos', component: WorksComponent },
    {path: 'experiencia-laboral', component: ExperienceComponent },
    {path: 'trabajos', component: WorksComponent },
    {path: 'cursos', component: CoursesUdemyComponent },
    {path: 'repositorios', component: RepositoriesComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true, relativeLinkResolution: 'legacy' });
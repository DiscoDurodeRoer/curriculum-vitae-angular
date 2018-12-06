import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { ContactComponent } from './components/contact/contact.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { SkillsComponent } from './components/skills/skills.component';
import { StudiesComponent } from './components/studies/studies.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { WorksComponent } from './components/works/works.component';

const APP_ROUTES: Routes = [
    {path: 'inicio', component: HomeComponent },
    {path: 'contacto', component: ContactComponent },
    {path: 'datos-personales', component: PersonalDataComponent },
    {path: 'habilidades', component: SkillsComponent },
    {path: 'estudios', component: StudiesComponent },
    {path: 'experiencia-laboral', component: ExperienceComponent },
    {path: 'trabajos', component: WorksComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
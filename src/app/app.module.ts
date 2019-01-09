import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { APP_ROUTING } from './app.routes';

// Componets
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { StudiesComponent } from './components/studies/studies.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { WorksComponent } from './components/works/works.component';

// Services
import { DatosService } from './services/datos.service'
import { EmailService } from './services/email.service'
import { WorkService } from './services/work.service';

// Pipes
import { SanitizePipe } from './pipes/sanitize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    SkillsComponent,
    ExperienceComponent,
    StudiesComponent,
    PersonalDataComponent,
    WorksComponent,
    SanitizePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    APP_ROUTING
  ],
  providers: [
    DatosService,
    EmailService,
    WorkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

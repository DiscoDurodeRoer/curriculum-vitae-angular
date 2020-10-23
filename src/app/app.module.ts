// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { APP_ROUTING } from './app.routes';
import { DdrConfigurationModule } from 'ddr-configuration';
import { DdrSpinnerModule } from 'ddr-spinner';

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
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { CoursesComponent } from './components/courses/courses.component';

// Services
import { DataService } from './services/data.service'
import { EmailService } from './services/email.service'
import { WorkService } from './services/work.service';
import { DdrConfigurationService } from 'ddr-configuration';
import { TranslateService } from './services/translate.service';

// Pipes
import { SanitizePipe } from './pipes/sanitize.pipe';
import { TranslatePipe } from './pipes/translate.pipe';

export function translateFactory(provider: TranslateService) {
  return () => provider.getData();
}

export function configFactory(provider: DdrConfigurationService) {
  return () => provider.getDataFromJSON('assets/config.json');
}

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
    SanitizePipe,
    CoursesComponent,
    RepositoriesComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    DdrConfigurationModule,
    DdrSpinnerModule,
    APP_ROUTING
  ],
  providers: [
    DataService,
    EmailService,
    WorkService,
    DdrConfigurationService,
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [DdrConfigurationService],
      multi: true
    },
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: translateFactory,
      deps: [TranslateService],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

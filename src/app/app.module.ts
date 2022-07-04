import { LanguagesComponent } from './components/languages/languages.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PersonalComponent } from './components/personal/personal.component';
// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { APP_ROUTING } from './app.routes';
import { TableModule } from 'primeng/table';

// Componets
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experiences/experiences.component';
import { StudiesComponent } from './components/studies/studies.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { WorksComponent } from './components/works/works.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { CoursesUdemyComponent } from './components/courses-udemy/courses-udemy.component';

// Services
import { DataService } from './services/data.service'
import { EmailService } from './services/email.service'
import { WorkService } from './services/work.service';
import { TranslateService } from './services/translate.service';

// Pipes
import { SanitizePipe } from './pipes/sanitize.pipe';
import { TranslatePipe } from './pipes/translate.pipe';
import { DdrConfigService, DdrLibraryModule } from 'ddr-library';
import { CoursesComponent } from './components/courses/courses.component';
import { MenuComponent } from './components/menu/menu.component';
import { LetterRecommendationComponent } from './components/letter-recommendation/letter-recommendation.component';
import { GoogleMapsModule } from '@angular/google-maps';

export function translateFactory(provider: TranslateService) {
  return () => provider.getData();
}

export function configFactory(provider: DdrConfigService){
  return () => provider.getDataFromJSON('assets/config.json');
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    APP_ROUTING,
    DdrLibraryModule,
    GoogleMapsModule,
    TableModule
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ContactComponent,
    SkillsComponent,
    ExperienceComponent,
    StudiesComponent,
    PersonalDataComponent,
    WorksComponent,
    SanitizePipe,
    CoursesUdemyComponent,
    RepositoriesComponent,
    PersonalComponent,
    CoursesComponent,
    MenuComponent,
    LetterRecommendationComponent,
    LanguagesComponent,
    TranslatePipe
  ],
  providers: [
    DataService,
    EmailService,
    WorkService,
    DdrConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [DdrConfigService],
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

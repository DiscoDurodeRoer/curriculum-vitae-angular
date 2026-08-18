import { DatePipe, TitleCasePipe } from '@angular/common';
import {
  Component,
  effect,
  inject,
  input,
  InputSignal,
  Signal,
  signal,
  ViewEncapsulation,
  WritableSignal
} from '@angular/core';
import { DdrAccordionComponent } from 'ddr-ng/components/accordion';
import { DdrCardComponent } from 'ddr-ng/components/card';
import { DdrTranslatePipe, DdrTranslateService } from 'ddr-ng/translate';
import { ExperienceData } from '../../models/experience-data.model';
import { BadgeTech } from '../../../../shared/components/badge-tech/badge-tech';
import { DdrModalComponent, DdrModalService } from 'ddr-ng/modal';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrSafePipe } from 'ddr-ng/pipes/safe';
import { DdrBadgePillComponent } from 'ddr-ng/components/badge-pill';

@Component({
  selector: 'app-experience',
  imports: [
    DdrCardComponent,
    DdrAccordionComponent,
    DdrBadgePillComponent,
    DdrModalComponent,
    DdrButtonComponent,
    DdrSafePipe,
    DdrTranslatePipe,
    DatePipe,
    TitleCasePipe,
    BadgeTech
  ],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  providers: [
    DdrModalService
  ],
  encapsulation: ViewEncapsulation.None
})
export class Experience {

  private modalService: DdrModalService = inject(DdrModalService)
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService)

  public readonly ID_MODAL: Signal<string> = signal<string>('modal-recomendation-letter')

  public locale: WritableSignal<string> = signal<string>('');
  public pathRecomendationLetter: WritableSignal<string | null> = signal<string | null>(null);

  public experienceData: WritableSignal<ExperienceData[]> = signal<ExperienceData[]>([
    {
      jobTitle: "Senior Full Stack Developer",
      company: "Accenture",
      start: "2024-03",
      location: 'saragossa',
      country: 'spain',
      type: 'remote',
      recomendationLetter: false,
      bullets: [
        "accenture.bullet.1",
        "accenture.bullet.2",
        "accenture.bullet.3",
        "accenture.bullet.4",
      ],
      technologies: [
        'Angular',
        'Typescript',
        'HTML',
        'CSS',
        'SCSS',
        'Bootstrap',
        'Rxjs',
        'Spring Boot',
        'Postgresql',
        'Storybook',
        'Git',
        'Jenkins'
      ],
      methodologies: [
        'agile',
        'scrum',
        'solid',
        'code.review'
      ]
    },
    {
      jobTitle: "trainer.modern.angular",
      company: "MainJobs",
      start: "2026-01",
      end: "2026-01",
      location: 'Madrid',
      country: 'spain',
      type: 'remote',
      recomendationLetter: false,
      bullets: [
        'mainjobs.bullet.1',
        'mainjobs.bullet.2',
        'mainjobs.bullet.3',
        'mainjobs.bullet.4'
      ],
      technologies: [
        'Angular',
        'Typescript',
        'HTML',
        'CSS'
      ],
      methodologies: []
    },
    {
      jobTitle: "Senior Full Stack Developer",
      company: "Evolutio Cloud S.A",
      start: "2023-01",
      end: "2024-01",
      location: 'Madrid',
      country: 'spain',
      type: 'hibrid',
      recomendationLetter: false,
      bullets: [
        'evolutio.bullet.1',
        'evolutio.bullet.2',
        'evolutio.bullet.3',
        'evolutio.bullet.4'
      ],
      technologies: [
        'Angular',
        'Typescript',
        'HTML',
        'CSS',
        'SCSS',
        'Bootstrap',
        'Rxjs',
        'Spring Boot',
        'MySQL',
        'Storybook',
        'AWS',
        'Git',
        'Docker'
      ],
      methodologies: [
        'agile',
        'scrum'
      ]
    },
    {
      jobTitle: "Senior Full Stack Developer",
      company: "Moontech",
      start: "2021-02",
      end: "2023-12",
      location: 'Zaragoza',
      country: 'spain',
      type: 'presential',
      recomendationLetter: true,
      bullets: [
        'moontech.bullet.1',
        'moontech.bullet.2',
        'moontech.bullet.3',
        'moontech.bullet.4'
      ],
      technologies: [
        'Angular',
        'Typescript',
        'HTML',
        'CSS',
        'SCSS',
        'Rxjs',
        'Ionic',
        'Bootstrap',
        'Oracle',
        'MySQL',
        'MongoDB',
        'NestJS',
        'Git'
      ],
      methodologies: [
        'agile',
        'scrum',
        'code.review'
      ]
    },
    {
      jobTitle: "Frontend Angular Developer",
      company: "Indra",
      start: "2021-02",
      end: "2023-12",
      location: 'Ciudad Real',
      country: 'spain',
      type: 'presential',
      recomendationLetter: true,
      bullets: [
        'indra.bullet.1',
        'indra.bullet.2',
        'indra.bullet.3',
        'indra.bullet.4'
      ],
      technologies: [
        'Angular',
        'Typescript',
        'HTML',
        'CSS',
        'SCSS',
        'Rxjs',
        'Ionic',
        'Bootstrap',
        'Git'
      ],
      methodologies: [
        'agile',
        'scrum'
      ]
    },
  ])

  constructor() {
    effect(() => this.locale.set(this.ddrTranslateService.currentLanguage()!))
  }

  openModalRecomendationLetter(experience: ExperienceData) {
    this.pathRecomendationLetter.set(`/recommendations/${experience.company}.pdf`)
    this.modalService.open(this.ID_MODAL());
  }

}

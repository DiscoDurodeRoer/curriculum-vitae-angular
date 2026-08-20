import { DatePipe, TitleCasePipe } from '@angular/common';
import {
  Component,
  effect,
  inject,
  signal,
  ViewEncapsulation,
  WritableSignal
} from '@angular/core';
import { DdrAccordionComponent } from 'ddr-ng/components/accordion';
import { DdrCardComponent } from 'ddr-ng/components/card';
import { DdrTranslatePipe, DdrTranslateService } from 'ddr-ng/translate';
import { ExperienceData } from '../../models/experience-data.model';
import { BadgeTech } from '../../../../shared/components/badge-tech/badge-tech';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrBadgePillComponent } from 'ddr-ng/components/badge-pill';
import { PdfViewerManager } from '../../../../shared/components/pdf-viewer/services/pdf-viewer-manager';
import { pathFolderRecommendations } from '../../curriculum-vitae.constants';

@Component({
  selector: 'app-experience',
  imports: [
    DdrCardComponent,
    DdrAccordionComponent,
    DdrBadgePillComponent,
    DdrButtonComponent,
    DdrTranslatePipe,
    DatePipe,
    TitleCasePipe,
    BadgeTech
  ],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  encapsulation: ViewEncapsulation.None
})
export class Experience {

  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService)
  private pdfViewerManager: PdfViewerManager = inject(PdfViewerManager)

  public locale: WritableSignal<string> = signal<string>('');

  public experienceData: WritableSignal<ExperienceData[]> = signal<ExperienceData[]>([
    {
      jobTitle: "Senior Full Stack Developer",
      company: "Accenture",
      start: "2024-03",
      location: 'saragossa',
      country: 'spain',
      type: 'remote',
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
      url: `${pathFolderRecommendations}/Moontech.pdf`,
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
      url: `${pathFolderRecommendations}/Indra.pdf`,
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

  viewRecomendationLetter(url: string) {
    this.pdfViewerManager.open(url);
  }

}

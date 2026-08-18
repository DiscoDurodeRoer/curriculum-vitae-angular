import { Component, signal, ViewEncapsulation, WritableSignal } from '@angular/core';
import { DdrCardComponent } from 'ddr-ng/components/card';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { ProjectData } from '../../models/project-data.model';
import { BadgeTech } from '../../../../shared/components/badge-tech/badge-tech';

@Component({
  selector: 'app-projects',
  imports: [
    DdrCardComponent,
    DdrTranslatePipe,
    BadgeTech
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  encapsulation: ViewEncapsulation.None
})
export class Projects {

  public projectsData: WritableSignal<ProjectData[]> = signal<ProjectData[]>([
    {
      title: 'blog.discoduroderoer',
      description: 'blog.discoduroderoer.description',
      url: 'https://discoduroderoer.es',
      technologies: [
        'Wordpress',
        'PHP'
      ]
    },
    {
      title: 'youtube.discoduroderoer',
      description: 'youtube.discoduroderoer.description',
      url: 'https://www.youtube.com/@DiscoDurodeRoer',
      technologies: []
    },
    {
      title: 'DDR NG',
      description: 'ddr.ng.description',
      url: 'https://www.ddr-ng.com/',
      technologies: [
        'Angular',
        'Typescript',
        'HTML',
        'SCSS'
      ]
    },
    {
      title: 'ddr.mentoring',
      description: 'ddr.mentoring.description',
      url: 'https://tutorias.discoduroderoer.es',
      technologies: [
        'Angular',
        'Typescript',
        'HTML',
        'SCSS',
        'Laravel',
        'PHP'
      ]
    },
    {
      title: 'cv',
      description: 'cv.description',
      url: 'https://github.com/DiscoDurodeRoer/curriculum-vitae-angular',
      technologies: [
        'Angular',
        'Typescript',
        'HTML',
        'SCSS'
      ]
    }
  ])


}

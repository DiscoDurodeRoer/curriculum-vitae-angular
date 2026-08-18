import { Component, effect, inject, signal, WritableSignal } from '@angular/core';
import { DdrCardComponent } from 'ddr-ng/components/card';
import { DdrTranslatePipe, DdrTranslateService } from 'ddr-ng/translate';
import { EducationData } from '../../models/education-data.model';
import { DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [
    DdrCardComponent,
    DdrTranslatePipe,
    DatePipe,
    TitleCasePipe
  ],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {

  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService)

  public locale: WritableSignal<string> = signal<string>('');

  public educationData: WritableSignal<EducationData[]> = signal<EducationData[]>([
    {
      title: 'daw',
      start: '2016-09',
      end: '2017-06',
      center: 'IES Maestre de Calatrava',
      city: 'Ciudad Real',
      country: 'Spain'
    },
    {
      title: 'dam',
      start: '2012-09',
      end: '2014-06',
      center: 'IES Maestre de Calatrava',
      city: 'Ciudad Real',
      country: 'Spain'
    },
    {
      title: 'smr',
      start: '2010-09',
      end: '2012-06',
      center: 'IES Maestre de Calatrava',
      city: 'Ciudad Real',
      country: 'Spain'
    },
  ])

  constructor() {
    effect(() => this.locale.set(this.ddrTranslateService.currentLanguage()!))
  }

}

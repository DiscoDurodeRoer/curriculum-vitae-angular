import { Component, inject } from '@angular/core';
import { AboutMe } from '../../components/about-me/about-me';
import { Education } from '../../components/education/education';
import { Experience } from '../../components/experience/experience';
import { Projects } from '../../components/projects/projects';
import { ActivatedRoute } from '@angular/router';
import { DdrTranslateService } from 'ddr-ng/translate';
import { Meta } from '@angular/platform-browser';
import { Certificates } from '../../components/certificates/certificates';
import { PdfViewer } from '../../../../shared/components/pdf-viewer/pdf-viewer';

@Component({
  selector: 'app-curriculum-vitae',
  imports: [
    AboutMe,
    Experience,
    Education,
    Projects,
    Certificates,
    PdfViewer
  ],
  templateUrl: './curriculum-vitae.html',
  styleUrl: './curriculum-vitae.scss',
})
export class CurriculumVitae {

  private activateRoute: ActivatedRoute = inject(ActivatedRoute);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  private meta: Meta = inject(Meta);

  ngOnInit(): void {
    const lang = this.activateRoute.snapshot.queryParamMap.get('lang');

    if (lang && this.ddrTranslateService.availableLanguages().includes(lang)) {
      this.ddrTranslateService.changeLanguage(lang);
      this.meta.addTag({
        name: 'description',
        content: this.ddrTranslateService.getTranslate('meta.description')
      })
    }
  }

}

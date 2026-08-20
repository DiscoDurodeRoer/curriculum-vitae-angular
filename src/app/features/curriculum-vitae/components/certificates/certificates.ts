import { Component, effect, inject, Signal, signal, WritableSignal } from '@angular/core';
import { DdrCardComponent } from 'ddr-ng/components/card';
import { CertificateData } from '../../models/certificate-data.model';
import { DdrTranslatePipe, DdrTranslateService } from 'ddr-ng/translate';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { PdfViewerManager } from '../../../../shared/components/pdf-viewer/services/pdf-viewer-manager';
import { pathFolderCertificates } from '../../curriculum-vitae.constants';
import { DdrButtonComponent } from 'ddr-ng/components/button';

@Component({
  selector: 'app-certificates',
  imports: [
    DdrCardComponent,
    DdrButtonComponent,
    DdrTranslatePipe,
    DatePipe,
    TitleCasePipe
  ],
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss'
})
export class Certificates {

  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  private pdfViewerManager: PdfViewerManager = inject(PdfViewerManager);

  public locale: WritableSignal<string> = signal<string>('');

  public certificatesData: WritableSignal<CertificateData[]> = signal<CertificateData[]>([
    {
      title: 'elearning.instructor',
      date: '2026-08',
      center: 'ilabora',
      url: `${pathFolderCertificates}/elearning-instructor.pdf`
    }
  ])

  constructor() {
    effect(() => this.locale.set(this.ddrTranslateService.currentLanguage()!))
  }

  viewCertificate(url: string) {
    this.pdfViewerManager.open(url)
  }

}

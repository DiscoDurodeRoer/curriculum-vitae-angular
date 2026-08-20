import { Component, effect, inject, signal, Signal } from '@angular/core';
import { DdrModalComponent, DdrModalService } from 'ddr-ng/modal';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { PdfViewerManager } from './services/pdf-viewer-manager';
import { DdrSafePipe } from 'ddr-ng/pipes/safe';

@Component({
  selector: 'app-pdf-viewer',
  imports: [
    DdrModalComponent,
    DdrSafePipe,
    DdrTranslatePipe
  ],
  templateUrl: './pdf-viewer.html',
  styleUrl: './pdf-viewer.scss',
  providers: [
    DdrModalService
  ]
})
export class PdfViewer {

  private modalService: DdrModalService = inject(DdrModalService);
  private pdfViewerManager: PdfViewerManager = inject(PdfViewerManager);

  public readonly ID_MODAL: Signal<string> = signal<string>('modal-pdf');
  public readonly pdf = this.pdfViewerManager.pathPdf.asReadonly()

  constructor() {
    effect(() => {
      if (this.pdf()) this.openModal()
    })
  }

  openModal() {
    this.modalService.open(this.ID_MODAL());
  }

  closeModal() {
    this.pdfViewerManager.close();
  }

}

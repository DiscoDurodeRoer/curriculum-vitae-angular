import { Service, signal, WritableSignal } from '@angular/core';

@Service()
export class PdfViewerManager {

    readonly pathPdf: WritableSignal<string | null> = signal<string | null>(null);

    open(path: string): void {
        this.pathPdf.set(path);
    }

    close() {
        this.pathPdf.set(null);
    }
}

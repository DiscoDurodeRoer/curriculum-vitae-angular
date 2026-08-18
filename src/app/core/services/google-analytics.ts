import { Service } from '@angular/core';

declare function gtag(...args: any[]): void;

@Service()
export class GoogleAnalytics {

    trackCVDownload(filename: string) {
        gtag('event', 'cv_download', {
            file_name: filename,
            file_extension: 'pdf'
        });
    }
}

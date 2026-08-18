import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { tap } from 'rxjs';
import { saveAs } from "file-saver";

@Service()
export class Download {

    private http: HttpClient = inject(HttpClient);

    downloadFile(path: string, filename: string) {
        return this.http.get(path, { responseType: 'blob' })
            .pipe(
                tap((blob: Blob) => saveAs(blob, filename))
            )
    }

}

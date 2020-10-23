import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }

    public getHMTL() {
        let language = 'en';

        if (navigator.language && navigator.language.split('-')[0]) {
            language = navigator.language.split('-')[0];
        }

        let url = './assets/inicio-' + language + '.html';

        return this.http.get(url, { responseType: 'text' });
    }

    public downloadFile(path): Observable<any> {
        return this.http.get(path, { responseType: 'blob' });
    }

}

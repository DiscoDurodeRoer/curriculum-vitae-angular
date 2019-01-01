import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class EmailService {

    private _url;

    public set url(url){
        this._url = url;
    }

    constructor(private http: HttpClient) { }

    sendEmail(data) {

        let options = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        return this.http.post(this._url, data, { headers: options });
    }

}

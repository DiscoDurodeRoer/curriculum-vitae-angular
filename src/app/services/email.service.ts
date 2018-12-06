import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';

@Injectable()
export class EmailService {

    constructor(private http: Http) { }

    sendEmail(data) {

        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        let body = 'data='+JSON.stringify(data);
        return this.http.post('https://www.discoduroderoer.es/testCorreo/email.php', body, { headers: headers });
    }

}

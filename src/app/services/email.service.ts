import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class EmailService {

    constructor(private http: HttpClient) { }

    sendEmail(data) {

        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        let body = 'data='+JSON.stringify(data);
        return this.http.post('https://www.discoduroderoer.es/testCorreo/email.php', body, { headers: headers });
    }

}

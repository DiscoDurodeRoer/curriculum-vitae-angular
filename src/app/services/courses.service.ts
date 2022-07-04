import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DdrConfigService } from 'ddr-library';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private url: string;
  private token: string;

  constructor(
    private http: HttpClient,
    private ddrConfigService: DdrConfigService) {
    const config = this.ddrConfigService.getData("config");
    this.url = config.urlCoursesUdemy;
    this.token = config.tokenUdemy;
  }

  getCourses(): Observable<any> {

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set("authorization", "Bearer " + this.token);

    return this.http.get(this.url, { headers: headers });
  }


}

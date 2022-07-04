import { DdrConfigService } from 'ddr-library';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  private url: string;

  constructor(
    private http: HttpClient,
    private ddrConfigService: DdrConfigService) {
    const config = this.ddrConfigService.getData("config");
    this.url = config.urlGithubRepositories;
  }

  getRepositories(): Observable<any> {
    return this.http.get(this.url);
  }


}

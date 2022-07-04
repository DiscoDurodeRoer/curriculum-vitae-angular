import { Router } from '@angular/router';
import { DdrConfigService, DdrSpinnerService } from 'ddr-library';
import { RepositoriesService } from './../../services/repositories.service';
import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  public repositories: Repository[];
  public itemsPerPage: number;
  public page: number;

  constructor(
    private repositoriesService: RepositoriesService,
    private router: Router,
    private ddrConfigurationService: DdrConfigService,
    private ddrSpinnerService: DdrSpinnerService
  ) { 
    this.page = 1;
  }

  ngOnInit() {

    this.ddrSpinnerService.showSpinner();
    const showRepositories = this.ddrConfigurationService.getData("config.showRepositories");

    if (!showRepositories) {
      this.router.navigate(['/inicio']);
    }

    this.itemsPerPage = this.ddrConfigurationService.getData("config.itemsPerPageWorks");

    this.repositoriesService.getRepositories().subscribe(data => {
      data.forEach(e => {
        
        if(e.language == 'C#'){
          e.language = 'C-sharp';
        }
        
        switch(e.name){
          case 'ejercicios-sql-youtube':
            e.language = 'TSQL'
            break;
          case 'ejercicios-excel-youtube':
            e.language = 'Excel'
            break;
        }
        
      });
      this.repositories = data;
      this.ddrSpinnerService.hideSpinner();
    }, error => {
      console.error(error);
      this.ddrSpinnerService.hideSpinner();
    })

  }

}

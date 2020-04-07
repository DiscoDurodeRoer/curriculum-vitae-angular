import { Router } from '@angular/router';
import { DdrSpinnerService } from 'ddr-spinner';
import { DdrConfigurationService } from 'ddr-configuration';
import { RepositoriesService } from './../../services/repositories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  public repositories;
  public itemsPerPage;
  public page: number = 1;

  constructor(
    private repositoriesService: RepositoriesService,
    private router: Router,
    private ddrConfigurationService: DdrConfigurationService,
    private ddrSpinnerService: DdrSpinnerService
  ) { }

  ngOnInit() {


    this.ddrSpinnerService.showSpinner();
    const config = this.ddrConfigurationService.getData("config");

    if (!config.showRepositories) {
      this.router.navigate(['/inicio']);
    }

    this.itemsPerPage = config.itemsPerPageWorks;

    this.repositoriesService.getRepositories().subscribe(data => {
      this.repositories = data;
      this.ddrSpinnerService.hideSpinner();
    }, error => {
      console.error(error);
      this.ddrSpinnerService.hideSpinner();
    })

  }

}

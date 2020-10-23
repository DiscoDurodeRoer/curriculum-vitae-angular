import { DdrSpinnerService } from 'ddr-spinner';
import { DdrConfigurationService } from 'ddr-configuration';
import { Component, OnInit } from '@angular/core';
import { WorkService } from '../../services/work.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  public posts;

  public itemsPerPage;

  public page: number = 1;

  constructor(
    private works: WorkService,
    private router: Router,
    private ddrConfigurationService: DdrConfigurationService,
    private ddrSpinnerService: DdrSpinnerService
  ) { }

  ngOnInit() {

    this.ddrSpinnerService.showSpinner();

    const config = this.ddrConfigurationService.getData("config");

    if (!config.showWorks) {
      this.router.navigate(['/inicio']);
    }

    this.works.webUrl = config.webUrl;
    this.works.categoryId = config.categoryId;
    this.itemsPerPage = config.itemsPerPageWorks;


    this.works.getPosts().subscribe(postData => {

      if (postData && postData['posts']) {
        this.posts = postData["posts"];
      } else {
        this.posts = [];
      }

      this.ddrSpinnerService.hideSpinner();
    }, error => {
      console.log(error);
      this.ddrSpinnerService.hideSpinner();
    });

  }

}

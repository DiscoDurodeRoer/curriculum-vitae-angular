import { Post } from './../../models/post';
import { DdrConfigService, DdrSpinnerService } from 'ddr-library';
import { Component, OnInit } from '@angular/core';
import { WorkService } from '../../services/work.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  public posts: Post[];
  public itemsPerPage: number;
  public page: number;

  constructor(
    private works: WorkService,
    private router: Router,
    private ddrConfigurationService: DdrConfigService,
    private ddrSpinnerService: DdrSpinnerService
  ) { 
    this.page = 1;
  }

  ngOnInit() {

    this.ddrSpinnerService.showSpinner();

    const showWorks = this.ddrConfigurationService.getData("config.showWorks");

    if (!showWorks) {
      this.router.navigate(['/inicio']);
    }

    this.works.webUrl = this.ddrConfigurationService.getData("config.webUrl");
    this.works.categoryId = this.ddrConfigurationService.getData("config.categoryId");
    this.itemsPerPage = this.ddrConfigurationService.getData("config.itemsPerPageWorks");


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

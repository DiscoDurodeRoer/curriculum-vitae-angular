import { Router } from '@angular/router';
import { DdrSpinnerService, DdrConfigService } from 'ddr-library';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-udemy',
  templateUrl: './courses-udemy.component.html',
  styleUrls: ['./courses-udemy.component.css']
})
export class CoursesUdemyComponent implements OnInit {

  public courses;
  public itemsPerPage;
  public page: number = 1;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private ddrConfigurationService: DdrConfigService,
    private ddrSpinnerService: DdrSpinnerService
  ) { }

  ngOnInit() {

    this.ddrSpinnerService.showSpinner();
    const config = this.ddrConfigurationService.getData("config");

    if (!config.showCourses) {
      this.router.navigate(['/inicio']);
    }

    this.itemsPerPage = config.itemsPerPageWorks;

    this.coursesService.getCourses().subscribe(data => {
      
      let coursesData = data.results;
      
      this.courses = coursesData.filter(course => course.published_title);

      this.ddrSpinnerService.hideSpinner();
    }, error => {
      console.error(error);
      this.ddrSpinnerService.hideSpinner();
    })

  }

}

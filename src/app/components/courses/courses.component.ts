import { Router } from '@angular/router';
import { DdrConfigurationService } from 'ddr-configuration';
import { DdrSpinnerService } from 'ddr-spinner';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public courses;
  public itemsPerPage;
  public page: number = 1;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private ddrConfigurationService: DdrConfigurationService,
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

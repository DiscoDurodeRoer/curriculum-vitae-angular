import { Course } from './../../models/course';
import { DdrConfigService } from 'ddr-library';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public courses: Course[];

  constructor(
    private ddrConfigurationService: DdrConfigService
  ) { }

  ngOnInit() {
    this.courses = this.ddrConfigurationService.getData("data.courses");
  }

}

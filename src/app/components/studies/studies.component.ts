import { Study } from './../../models/study';
import { DdrConfigService } from 'ddr-library';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  public studies: Study[];

  constructor(
    private ddrConfigurationService: DdrConfigService
  ) { }

  ngOnInit() {
    this.studies = this.ddrConfigurationService.getData("data.studies");
  }

}

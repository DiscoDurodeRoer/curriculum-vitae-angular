import { DdrSpinnerService } from 'ddr-spinner';
import { DdrConfigurationService } from 'ddr-configuration';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  public studies: any[];
  public courses: any[];
  public load = false;

  constructor(
    private ddrConfigurationService: DdrConfigurationService,
    private ddrSpinnerService: DdrSpinnerService) { }

  ngOnInit() {

    this.ddrSpinnerService.showSpinner();

    const data = this.ddrConfigurationService.getData("data");
    this.studies = data.estudios;
    this.courses = data.cursos;

    this.ddrSpinnerService.hideSpinner();

  }

}

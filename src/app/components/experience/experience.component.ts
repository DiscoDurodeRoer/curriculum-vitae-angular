import { DdrSpinnerService } from 'ddr-spinner';
import { DdrConfigurationService } from 'ddr-configuration';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  public experiences: any[];

  constructor(
    private ddrConfigurationService: DdrConfigurationService,
    private ddrSpinnerService: DdrSpinnerService
  ) { }

  ngOnInit() {

    this.ddrSpinnerService.showSpinner();
    const data = this.ddrConfigurationService.getData("data");
    this.experiences = data.experiencias;

    this.ddrSpinnerService.hideSpinner();

  }

}

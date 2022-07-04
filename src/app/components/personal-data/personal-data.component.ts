import { PersonalData } from './../../models/personal-data';
import { Component, OnInit } from '@angular/core';
import { DdrConfigService, DdrSpinnerService } from 'ddr-library';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  public personalData: PersonalData[];

  constructor(
    private ddrConfig: DdrConfigService
  ) { }

  ngOnInit() {
    this.personalData = this.ddrConfig.getData("data.personalData");
  }

}

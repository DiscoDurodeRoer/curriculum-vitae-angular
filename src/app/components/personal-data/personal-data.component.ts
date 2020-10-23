import { DdrConfigurationService } from 'ddr-configuration';
import { Component, OnInit } from '@angular/core';
import { DdrSpinnerService } from 'ddr-spinner';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  public personal_data: any[];
  public load = false;

  constructor(
    private ddrConfigurationService: DdrConfigurationService,
    private ddrSpinnerService: DdrSpinnerService
  
  ) { }

  ngOnInit() {

    
    this.ddrSpinnerService.showSpinner();
    const data = this.ddrConfigurationService.getData("data");
    this.personal_data = data.datos_personales;
    
    this.ddrSpinnerService.hideSpinner();

  }

}

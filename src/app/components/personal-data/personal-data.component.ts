import { DdrConfigurationService } from 'ddr-configuration';
import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';
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
    private dataService: DatosService,
    private ddrConfigurationService: DdrConfigurationService,
    private ddrSpinnerService: DdrSpinnerService
  
  ) { }

  ngOnInit() {

    
    this.ddrSpinnerService.showSpinner();
    const data = this.ddrConfigurationService.getData("data");
    this.personal_data = data.datos_personales;
    
    this.ddrSpinnerService.hideSpinner();

    // this.dataService.url = DatosService.DATOS;
    // this.dataService.responseType = DatosService.JSON;
    // this.dataService.getData().subscribe(data => {
    //   this.personal_data = data["datos_personales"];
    //   this.load = true;
    // }
    // );

  }

}

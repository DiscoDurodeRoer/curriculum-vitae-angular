import { DdrSpinnerService } from 'ddr-spinner';
import { DdrConfigurationService } from 'ddr-configuration';
import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  public experiences: any[];

  constructor(
    private dataService: DatosService,
    private ddrConfigurationService: DdrConfigurationService,
    private ddrSpinnerService: DdrSpinnerService
  ) { }

  ngOnInit() {

    this.ddrSpinnerService.showSpinner();
    const data = this.ddrConfigurationService.getData("data");
    this.experiences = data.experiencias;

    this.ddrSpinnerService.hideSpinner();

    // this.dataService.url = DatosService.DATOS;
    // this.dataService.responseType = DatosService.JSON;
    // this.dataService.getData().subscribe(data => {
    //   this.experiences = data["experiencias"];
    //   this.load = true;
    // });

  }

}

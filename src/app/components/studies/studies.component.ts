import { DdrSpinnerService } from 'ddr-spinner';
import { DdrConfigurationService } from 'ddr-configuration';
import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  public studies: any[];
  public courses: any[];
  public load = false;

  constructor(private dataService: DatosService,
    private ddrConfigurationService: DdrConfigurationService,
    private ddrSpinnerService: DdrSpinnerService) { }

  ngOnInit() {

    this.ddrSpinnerService.showSpinner();

    const data = this.ddrConfigurationService.getData("data");
    this.studies = data.estudios;
    this.courses = data.cursos;

    this.ddrSpinnerService.hideSpinner();


    // this.dataService.url = DatosService.DATOS;
    // this.dataService.responseType = DatosService.JSON;
    // this.dataService.getData().subscribe(data => {
    //   this.studies = data["estudios"];
    //   this.courses = data["cursos"];
    //   this.load =true;
    // }, error => {
    //   console.log(error);
    //   this.load =true;
    // });

  }

}

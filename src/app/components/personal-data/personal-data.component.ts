import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  public personal_data: any[];
  public load = false;

  constructor(private dataService: DatosService) { }

  ngOnInit() {
    this.dataService.url = DatosService.DATOS;
    this.dataService.responseType = DatosService.JSON;
    this.dataService.getData().subscribe(data => {
      this.personal_data = data["datos_personales"];
      this.load = true;
    }
    );

  }

}

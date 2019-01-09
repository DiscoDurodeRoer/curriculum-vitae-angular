import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  public experiences: any[];
  public load = false;

  constructor(private dataService: DatosService) { }

  ngOnInit() {
    this.dataService.url = DatosService.DATOS;
    this.dataService.responseType = DatosService.JSON;
    this.dataService.getData().subscribe(data => {
      this.experiences = data["experiencias"];
      this.load = true;
    });

  }

}

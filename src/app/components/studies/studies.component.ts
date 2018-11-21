import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  private studies:any[];
  private courses:any[];


  constructor(private dataService: DatosService) { }

  ngOnInit() {

    this.dataService.getData().subscribe(data => {
      this.studies = data.json().estudios;
      this.courses = data.json().cursos;
    }
    );

  }

}

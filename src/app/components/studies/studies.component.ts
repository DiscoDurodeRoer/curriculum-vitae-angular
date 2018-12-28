import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  public studies:any[];
  public courses:any[];
  public load = false;

  constructor(private dataService: DatosService) { }

  ngOnInit() {

    this.dataService.getData().subscribe(data => {
      this.studies = data["estudios"];
      this.courses = data["cursos"];
      this.load =true;
    }, error => {
      console.log(error);
      this.load =true;
    });

  }

}

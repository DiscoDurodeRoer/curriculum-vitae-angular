import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  private experiences: any[];

  constructor(private dataService: DatosService) { }

  ngOnInit() {

    this.dataService.getData().subscribe(data => {
      this.experiences = data["experiencias"];
    }
    );

  }

}

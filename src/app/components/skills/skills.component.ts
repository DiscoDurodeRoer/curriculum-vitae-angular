import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills: any[];
  public load = false;

  constructor(private dataService: DatosService) { }

  ngOnInit() {

    this.dataService.getData().subscribe(data => {
      this.skills = data["habilidades"];

      for (let skill of this.skills) {
        skill.class_color = this.randomColor();
      }

        this.load = true;

    }, error => {
      console.log(error);
      this.load = true;
    });

  }

  randomColor() {

    let rand = Math.floor((Math.random() * 4) + 1);
    let class_color = { "color": '', "class_progress": '' };
    switch (rand) {
      case 1:
        class_color.color = "red";
        class_color.class_progress = "bg-danger";
        break;
      case 2:
        class_color.color = "blue";
        class_color.class_progress = "bg-info";
        break;
      case 3:
        class_color.color = "yellow";
        class_color.class_progress = "bg-warning";
        break;
      case 4:
        class_color.color = "green";
        class_color.class_progress = "bg-success";
        break;
    }
    return class_color;
  }


}

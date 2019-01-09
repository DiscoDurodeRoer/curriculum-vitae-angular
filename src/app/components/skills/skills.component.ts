import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills: any[];
  public load = false;

  constructor(private dataService: DatosService,
    private router: Router) { }

  ngOnInit() {
    this.dataService.url = DatosService.DATOS;
    this.dataService.responseType = DatosService.JSON;
    this.dataService.getData().subscribe(data => {
      const showPage = data["showSkills"];

      if(!showPage){  
        this.router.navigate(['/inicio']);
      }

      this.skills = data["habilidades"];

      for (let skill of this.skills) {
        skill.class_color = this.chooseColor(skill);
      }

      this.load = true;

    }, error => {
      console.log(error);
      this.load = true;
    });

  }

  chooseColor(skill: any) {

    let class_color = { "color": '', "class_progress": '' };
    if (skill.valor >= 80 && skill.valor <= 100) {
      class_color.color = "green";
      class_color.class_progress = "bg-success";
    } else if (skill.valor >= 60 && skill.valor < 80) {
      class_color.color = "blue";
      class_color.class_progress = "bg-info";
    } else if (skill.valor >= 40 && skill.valor < 60) {
      class_color.color = "yellow";
      class_color.class_progress = "bg-warning";
    } else {
      class_color.color = "red";
      class_color.class_progress = "bg-danger";
    }

    return class_color;
  }


}

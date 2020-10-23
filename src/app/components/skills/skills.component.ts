import { DdrSpinnerService } from 'ddr-spinner';
import { DdrConfigurationService } from 'ddr-configuration';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills: any[];
  public load = false;

  constructor(
    private router: Router,
    private ddrConfigurationService: DdrConfigurationService,
    private ddrSpinnerService: DdrSpinnerService
  ) { }

  ngOnInit() {


    this.ddrSpinnerService.showSpinner();
    const config = this.ddrConfigurationService.getData("config");

    if (!config.showSkills) {
      this.router.navigate(['/inicio']);
    }

    const data = this.ddrConfigurationService.getData("data");
    this.skills = data.habilidades;

    for (let skill of this.skills) {
      skill.class_color = this.chooseColor(skill);
    }

    this.ddrSpinnerService.hideSpinner();

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

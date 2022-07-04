import { Skill } from './../../models/skill';
import { DdrConfigService, DdrSpinnerService } from 'ddr-library';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { groupBy } from 'lodash';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills: Skill[];
  public skillsAll: Skill[];
  public load = false;

  constructor(
    private router: Router,
    private ddrConfigurationService: DdrConfigService,
    private ddrSpinnerService: DdrSpinnerService
  ) { }

  ngOnInit() {


    this.ddrSpinnerService.showSpinner();
    const showSkills = this.ddrConfigurationService.getData("config.showSkills");

    if (!showSkills) {
      this.router.navigate(['/inicio']);
    }

    this.skillsAll = this.ddrConfigurationService.getData("data.skills");
    this.skills = groupBy(this.skillsAll, 'group');
    
    this.ddrSpinnerService.hideSpinner();

  }


}

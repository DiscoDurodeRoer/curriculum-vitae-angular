import { Experience } from './../../models/experience';
import { DdrConfigService } from 'ddr-library';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperienceComponent implements OnInit {

  public experience: Experience[];

  constructor(
    private ddrConfig: DdrConfigService
  ) { }

  ngOnInit() {
    this.experience = this.ddrConfig.getData("data.experience");
  }

}

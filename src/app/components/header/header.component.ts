import { DataService } from './../../services/data.service';
import { DdrConfigurationService } from 'ddr-configuration';
import { Component, OnInit } from '@angular/core';
import { saveAs as importedSaveAs } from "file-saver";

@Component({
  selector: 'header-comp',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public showSkills = false;
  public showContact = false;
  public showWorks = false;
  public showCourses = false;
  public showRepositories = false;

  constructor(
    private ddrConfigurationService: DdrConfigurationService,
    private dataService: DataService
  ) { }

  ngOnInit() {

    const config = this.ddrConfigurationService.getData("config");

    this.showSkills = config.showSkills;
    this.showContact = config.showContact;
    this.showWorks = config.showWorks;
    this.showCourses = config.showCourses;
    this.showRepositories = config.showRepositories;
  }

  downloadCV() {

    this.dataService.downloadFile('assets/pdf/cv.pdf').subscribe(blob => {
      importedSaveAs(blob, 'CV-Fernando-Urena-Gomez.pdf');
    });
  }



}

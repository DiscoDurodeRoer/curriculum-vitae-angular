import { DdrSpinnerService } from 'ddr-spinner';
import { DdrConfigurationService } from 'ddr-configuration';
import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

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

  constructor(private dataService: DatosService,
    private ddrConfigurationService: DdrConfigurationService) { }

  ngOnInit() {

    const config = this.ddrConfigurationService.getData("config");

    this.showSkills = config.showSkills;
    this.showContact = config.showContact;
    this.showWorks = config.showWorks;
    this.showCourses = config.showCourses;
    this.showRepositories = config.showRepositories;



    // this.dataService.url = DatosService.DATOS;
    // this.dataService.responseType = DatosService.JSON;
    // this.dataService.getData().subscribe(data => {
    //   this.showSkills = data["showSkills"];
    //   this.showContact = data["showContact"];
    //   this.showWorks = data["showWorks"];
    // }, error =>{
    //   console.log(error);
    // });
  }

}

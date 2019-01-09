import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'header-comp',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  public showSkills = false;
  public showContact = false;
  public showWorks = false;


  constructor(private dataService:DatosService) { }

  ngOnInit() {

    this.dataService.url = DatosService.DATOS;
    this.dataService.responseType = DatosService.JSON;
    this.dataService.getData().subscribe(data => {
      this.showSkills = data["showSkills"];
      this.showContact = data["showContact"];
      this.showWorks = data["showWorks"];
    }, error =>{
      console.log(error);
    });
  }

}

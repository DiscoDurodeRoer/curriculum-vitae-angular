import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public social_networks = [];
  public img_profile: string;
  public name: string;

  constructor(private datosService:DatosService) { }

  ngOnInit() {
    this.datosService.getData().subscribe(data =>{
      this.social_networks = data["social_networks"];
      this.img_profile = data["img_profile"];
      this.name = data["name"];
    });
  }

}

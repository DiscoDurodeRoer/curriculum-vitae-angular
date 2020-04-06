import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public content;
  public load = false;

  constructor(private dataService:DatosService) { }

  ngOnInit() {
    this.dataService.url = DatosService.INICIO;
    this.dataService.responseType = DatosService.TEXT;
    this.dataService.getData().subscribe(data => {
      this.content = data;
      this.load = true;
    }, error =>{
      console.log(error);
    });
  }

}

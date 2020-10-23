import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public content;
  public load = false;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getHMTL().subscribe(data => {
      this.content = data;
      this.load = true;
    }, error => {
      console.log(error);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';
import { WorkService } from '../../services/work.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  public posts = [];
  public load = false;

  public itemsPerPage;

  public page: number = 1;

  constructor(private dataService: DatosService, private works: WorkService) { }

  ngOnInit() {

    this.dataService.getData().subscribe(data => {
      const webUrl = data["webUrl"];
      const categoryId = data["categoryId"];
      this.itemsPerPage = data["itemsPerPageWorks"];

      this.works.webUrl = webUrl;
      this.works.categoryId = categoryId;

      this.works.getPosts().subscribe(postData => {
        this.posts = postData["posts"];
        this.load = true;
      }, error => {
        console.log(error);
        this.load = true
      });

    }, error => {
      console.log(error);
      this.load = true
    });

  }

}

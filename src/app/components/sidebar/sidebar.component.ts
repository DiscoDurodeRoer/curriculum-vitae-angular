import { DdrConfigurationService } from 'ddr-configuration';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public social_networks = [];
  public img_profile: string;
  public name: string;

  constructor(
    private ddrConfigurationService: DdrConfigurationService
  ) { }

  ngOnInit() {

    const data = this.ddrConfigurationService.getData("data");
    this.name = data.name;
    this.social_networks = data.social_networks;
    this.img_profile = data.img_profile;

  }

}

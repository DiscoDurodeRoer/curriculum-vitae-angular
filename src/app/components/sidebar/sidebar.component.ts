import { DdrCacheService } from './../../services/ddr-cache.service';

import { DdrConfigService, DdrConstantsService, DdrResolutionService } from 'ddr-library';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public img_profile: string;
  public name: string;

  constructor(
    private ddrConfigurationService: DdrConfigService,
    public ddrResolution: DdrResolutionService,
    public ddrConstants: DdrConstantsService,
    private ddrCache: DdrCacheService
  ) { 

  }

  ngOnInit() {

    const data = this.ddrConfigurationService.getData("data");
    this.name = this.ddrConfigurationService.getData("data.name");
    this.img_profile = this.ddrConfigurationService.getData("data.imgProfile");

  }

  openMenu(){
    this.ddrCache.setElement('showDetail', true);
  }

}

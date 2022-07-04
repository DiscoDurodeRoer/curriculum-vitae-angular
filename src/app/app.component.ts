import { Component, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { DdrConfigService, DdrDetailComponent, DdrResolutionService } from 'ddr-library';
import { DdrCacheService } from './services/ddr-cache.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  
  public name: string;
  
  @ViewChild(DdrDetailComponent, { static: false }) ddrDetail: DdrDetailComponent;

  constructor(
    private ddrConfigurationService: DdrConfigService,
    public ddrCache: DdrCacheService
  ){
    this.name = this.ddrConfigurationService.getData('data.name');
  }

  closeDetail(){
    this.ddrDetail.closeDetail();
    setTimeout(() => {
      this.ddrCache.setElement('showDetail', false);
    }, 600);
  }
}

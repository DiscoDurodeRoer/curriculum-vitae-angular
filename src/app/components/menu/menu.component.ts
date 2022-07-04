import { SocialNetwork } from './../../models/social-network';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { DdrConfigService, DdrResolutionService, DdrConstantsService } from 'ddr-library';
import { saveAs as importedSaveAs } from "file-saver";
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  @Input() showBorder: boolean = true;

  @Output() clickItemMenu: EventEmitter<boolean>;

  public showSkills: boolean;
  public showContact: boolean;
  public showWorks: boolean;
  public showCourses: boolean;
  public showRepositories: boolean;
  public socialNetworks: SocialNetwork[];

  constructor(
    private ddrConfigurationService: DdrConfigService,
    private dataService: DataService,
    public ddrResolution: DdrResolutionService,
    public ddrConstants: DdrConstantsService,
  ) { 
    this.socialNetworks = [];
    this.clickItemMenu = new EventEmitter<boolean>();
  }

 
  ngOnInit() {

    this.socialNetworks = this.ddrConfigurationService.getData("data.socialNetworks");

    this.showSkills = this.ddrConfigurationService.getData("config.showSkills");
    this.showContact = this.ddrConfigurationService.getData("config.showContact");
    this.showWorks = this.ddrConfigurationService.getData("config.showWorks");
    this.showCourses = this.ddrConfigurationService.getData("config.showCourses");
    this.showRepositories = this.ddrConfigurationService.getData("config.showRepositories");
  }

  onClickItemMenu(){
    this.clickItemMenu.emit(true);
  }

  downloadCV() {
    const filenameCV = this.ddrConfigurationService.getData('config.filenameCV');
    this.dataService.downloadFile('assets/pdf/cv.pdf').subscribe(blob => {
      importedSaveAs(blob, filenameCV);
    });
  }

}

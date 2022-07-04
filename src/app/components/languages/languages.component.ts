import { Language } from './../../models/language';
import { DdrConfigService } from 'ddr-library';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  public languages: Language[];

  constructor(
    private ddrConfig: DdrConfigService
  ) { }

  ngOnInit() {
    this.languages = this.ddrConfig.getData("data.languages");
  }

}

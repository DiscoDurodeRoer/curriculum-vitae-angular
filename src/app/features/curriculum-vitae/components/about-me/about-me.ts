import { Component, ViewEncapsulation } from '@angular/core';
import { DdrCardComponent } from 'ddr-ng/components/card';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'app-about-me',
  imports: [
    DdrCardComponent,
    DdrTranslatePipe
  ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
  encapsulation: ViewEncapsulation.None
})
export class AboutMe {}

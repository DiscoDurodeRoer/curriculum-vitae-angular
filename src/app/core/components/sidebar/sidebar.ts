import { Component, ViewEncapsulation } from '@angular/core';
import { DdrCardComponent } from 'ddr-ng/components/card';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { BadgeTech } from '../../../shared/components/badge-tech/badge-tech';
import { DdrBadgePillComponent } from 'ddr-ng/components/badge-pill';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [
    DdrCardComponent,
    DdrBadgePillComponent,
    DdrTranslatePipe,
    BadgeTech,
    NgOptimizedImage
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  encapsulation: ViewEncapsulation.None
})
export class Sidebar {}

import {
  Component,
  computed,
  input,
  InputSignal,
  ViewEncapsulation
} from '@angular/core';
import { DdrBadgePillComponent } from 'ddr-ng/components/badge-pill';

@Component({
  selector: 'app-badge-tech',
  imports: [
    DdrBadgePillComponent
  ],
  templateUrl: './badge-tech.html',
  styleUrl: './badge-tech.scss',
  encapsulation: ViewEncapsulation.None
})
export class BadgeTech {

  public technology: InputSignal<string> = input.required<string>();
  public classTechnology = computed(() =>
    this.technology()
      .toLowerCase()
      .replaceAll(' ', '-')
  );

}

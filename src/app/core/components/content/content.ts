import { Component, computed, inject, signal, Signal, ViewEncapsulation } from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { Download } from '../../services/download';
import { DdrThemeService } from 'ddr-ng/services/theme';
import { DdrToggleComponent } from 'ddr-ng/components/toggle';
import { DdrTranslatePipe, DdrTranslateService } from 'ddr-ng/translate';
import { DdrTheme } from 'ddr-ng/types';
import { RouterOutlet } from '@angular/router';
import { DdrSelectItem } from 'ddr-ng';
import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
import { DdrCardComponent } from 'ddr-ng/components/card';
import { Meta } from '@angular/platform-browser';
import { GoogleAnalytics } from '../../services/google-analytics';

@Component({
  selector: 'app-content',
  imports: [
    DdrButtonComponent,
    DdrToggleComponent,
    DdrCardComponent,
    DdrTranslatePipe,
    DdrDropdownComponent,
    RouterOutlet
  ],
  templateUrl: './content.html',
  styleUrl: './content.scss',
  encapsulation: ViewEncapsulation.None
})
export class Content {

  private download: Download = inject(Download);
  private ddrThemeService: DdrThemeService = inject(DdrThemeService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  private analytics = inject(GoogleAnalytics);
  private meta: Meta = inject(Meta);

  public isDarkTheme: Signal<boolean> = computed(() => this.ddrThemeService.currentTheme() == 'ddr-dark');
  public currentLanguage: Signal<string | null> = this.ddrTranslateService.currentLanguage;
  public languages: Signal<DdrSelectItem<string>[]> = signal<DdrSelectItem<string>[]>([
    {
      label: 'language.switch.english',
      value: 'en'
    },
    {
      label: 'language.switch.spanish',
      value: 'es'
    }
  ])

  downloadCV() {
    this.download.downloadFile(
      `/pdf/cv-${this.currentLanguage()}.pdf`,
      'CV_Fernando_Urena_Gomez.pdf'
    ).subscribe({
      next: () => this.analytics.trackCVDownload(`cv-${this.currentLanguage()}.pdf`)
    });
  }

  changeTheme(value: boolean) {
    const theme: DdrTheme = value ? 'ddr-dark' : 'ddr-blue';
    this.ddrThemeService.setTheme(theme);
  }

  changeLanguage(item: DdrSelectItem<string>) {
    this.ddrTranslateService.changeLanguage(item.value);
    this.meta.addTag({
      name: 'description',
      content: this.ddrTranslateService.getTranslate('meta.description')
    })
  }
}

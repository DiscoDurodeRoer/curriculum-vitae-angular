import { Component, signal } from '@angular/core';
import { Sidebar } from './core/components/sidebar/sidebar';
import { Content } from './core/components/content/content';

@Component({
  selector: 'app-root',
  imports: [
    Content,
    Sidebar
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('curriculum-vitae');
}

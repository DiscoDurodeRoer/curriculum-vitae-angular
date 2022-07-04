import { Component, OnInit } from '@angular/core';
import { DdrConfigService } from 'ddr-library';

@Component({
  selector: 'app-letter-recommendation',
  templateUrl: './letter-recommendation.component.html',
  styleUrls: ['./letter-recommendation.component.css']
})
export class LetterRecommendationComponent implements OnInit {

  public letterRecommendations: any[];
  public page: number = 1;

  constructor(
    private ddrConfig: DdrConfigService
  ) { }

  ngOnInit() {
    this.letterRecommendations = this.ddrConfig.getData('data.letterRecommendations')
  }

}

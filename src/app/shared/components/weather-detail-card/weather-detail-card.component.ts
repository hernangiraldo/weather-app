import { Component, Input, OnInit } from '@angular/core';
import { ConsolidatedWeather } from '@models/dto';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-weather-detail-card',
  templateUrl: './weather-detail-card.component.html',
  styleUrls: ['./weather-detail-card.component.scss'],
})
export class WeatherDetailCardComponent implements OnInit {

  @Input() consolidated: ConsolidatedWeather;

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {}

  public getDay(date: Date): string {
    const day = new Date(date).getDay();
    return this.translate.instant(`days.${day}`);
  }

}

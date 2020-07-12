import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { City } from '@models/class';

@Component({
  selector: 'app-add-city-card',
  templateUrl: './add-city-card.component.html',
  styleUrls: ['./add-city-card.component.scss'],
})
export class AddCityCardComponent {
  @Input() city: City;
  @Input() isFavorite: boolean;
  @Output() buttonEmitter: EventEmitter<any> = new EventEmitter<any>();
}

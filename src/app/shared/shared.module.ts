import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { AddCityCardComponent } from '@app/shared/components/add-city-card/add-city-card.component';
import { LoadingComponent } from '@app/shared/components/loading/loading.component';
import { HeaderComponent } from '@app/shared/components/header/header.component';
import { WeatherDetailCardComponent } from '@app/shared/components/weather-detail-card/weather-detail-card.component';

const MODULES = [
  CommonModule,
  IonicModule,
];

const COMPONENTS = [
  AddCityCardComponent,
  LoadingComponent,
  HeaderComponent,
  WeatherDetailCardComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    ...MODULES,
    TranslateModule.forChild()
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS,
    TranslateModule
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomePage } from './home.page';
import { AddCityComponent } from '@app/modals/add-city/add-city.component';

@NgModule({
  imports: [
    SharedModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    AddCityComponent
  ]
})
export class HomePageModule {}

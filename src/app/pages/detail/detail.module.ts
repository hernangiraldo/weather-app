import { NgModule } from '@angular/core';

import { DetailPageRoutingModule } from './detail-routing.module';

import { DetailPage } from './detail.page';
import { SharedModule } from '@app/shared/shared.module';
import { CityDetailComponent } from '@app/modals/city-detail/city-detail.component';

@NgModule({
  imports: [
    SharedModule,
    DetailPageRoutingModule
  ],
  declarations: [
    DetailPage,
    CityDetailComponent
  ]
})
export class DetailPageModule {}

import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AddCityComponent } from '@app/modals/add-city/add-city.component';
import { CitiesService } from '@singletons/cities.service';
import { Observable } from 'rxjs';
import { City } from '@models/class';
import { ParamsService } from '@singletons/params.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  public favoriteCities: Observable<City[]>;

  constructor(
    private navCtrl: NavController,
    private modalController: ModalController,
    private citiesService: CitiesService,
    private paramsService: ParamsService
  ) {
    this.favoriteCities = this.citiesService.getFavoritesCities();
  }

  public async addCity() {
    const modal = await  this.modalController.create({
      component: AddCityComponent,
      swipeToClose: true,
      showBackdrop: true
    });

    await modal.present();
  }

  public deleteCity(cityId: number) {
    this.citiesService.removeUserCity(cityId);
  }

  public navigateToDetail(index: number) {
    this.paramsService.setParams({ index });
    this.navCtrl.navigateForward('/detail');
  }

}

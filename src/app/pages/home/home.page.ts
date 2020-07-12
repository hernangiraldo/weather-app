import { Component } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { AddCityComponent } from '@app/modals/add-city/add-city.component';
import { CitiesService } from '@singletons/cities.service';
import { Observable } from 'rxjs';
import { City } from '@models/class';
import { ParamsService } from '@singletons/params.service';
import { TranslateService } from '@ngx-translate/core';

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
    private paramsService: ParamsService,
    private alertController: AlertController,
    private translate: TranslateService
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

  public async deleteCity(cityId: number) {
    const {
      deleteCityTitle,
      deleteCityMessage,
      okBtn,
      cancelBtn
    } = this.translate.instant(['deleteCityTitle', 'deleteCityMessage', 'okBtn', 'cancelBtn']);

    const alert = await this.alertController.create({
      header: deleteCityTitle,
      message: deleteCityMessage,
      buttons: [
        {
          text: cancelBtn,
          role: 'cancel',
        }, {
          text: okBtn,
          handler: () => {
            this.citiesService.removeUserCity(cityId);
          }
        }
      ]
    });

    await alert.present();
  }

  public navigateToDetail(index: number) {
    this.paramsService.setParams({ index });
    this.navCtrl.navigateForward('/detail');
  }

}

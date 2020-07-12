import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavController } from '@ionic/angular';
import { StorageService } from '@singletons/storage.service';
import { City } from '@models/class';
import { CitiesService } from '@singletons/cities.service';

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `
})
export class AppComponent {

  constructor(
    private translate: TranslateService,
    private navCtrl: NavController,
    private storageService: StorageService,
    private citiesService: CitiesService
  ) {
    const lang = navigator.language.split('-')[0];
    this.translate.use(lang || 'es');
    this.navCtrl.navigateRoot('/');
    this.initFavorites();
  }

  private initFavorites() {
    const favorites = this.storageService.getFromStorage<City[]>('favorites');

    if (!!favorites) {
      this.citiesService.init(favorites);
    }
  }

}

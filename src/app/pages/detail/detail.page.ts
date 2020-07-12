import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CityDetailComponent } from '@app/modals/city-detail/city-detail.component';
import { ParamsService } from '@singletons/params.service';
import { Observable } from 'rxjs';
import { City } from '@models/class';
import { CitiesService } from '@singletons/cities.service';
import { ConsolidatedWeather } from '@models/dto';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public slideOpts;
  public favorites: Observable<City[]>;

  constructor(
    private navCtrl: NavController,
    private modalController: ModalController,
    private paramsService: ParamsService,
    private citiesService: CitiesService
  ) {
    const firstSlide = this.paramsService.getParams<{index: number}>().index;
    this.slideOpts = {
      initialSlide: firstSlide,
      loop: true
    };
    this.favorites = this.citiesService.getFavoritesCities();
  }

  ngOnInit() {
  }

  public goBack() {
    this.navCtrl.pop();
  }

  public async showDetails(cityId: number) {
    const modal = await this.modalController.create({
      component: CityDetailComponent,
      componentProps: {
        cityId
      },
      cssClass: 'detail__city-conditions',
      showBackdrop: true,
      swipeToClose: true,
      keyboardClose: true
    });

    await modal.present();
  }

}

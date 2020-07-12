import { Component, OnInit } from '@angular/core';
import slideOpts from './slideOptions';
import { ModalController, NavController } from '@ionic/angular';
import { CityDetailComponent } from '@app/modals/city-detail/city-detail.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public slideOpts = slideOpts;

  constructor(
    private navCtrl: NavController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  public goBack() {
    this.navCtrl.pop();
  }

  public async showDetails() {
    const modal = await this.modalController.create({
      component: CityDetailComponent,
      cssClass: 'detail__city-conditions',
      showBackdrop: true,
      swipeToClose: true,
      keyboardClose: true
    });

    await modal.present();
  }

}

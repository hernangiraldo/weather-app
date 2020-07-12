import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { HomeService } from '@app/pages/home/home.service';
import { HttpStatus, IHttpStatus } from '@models/class/http.class';
import { AddCityComponent } from '@app/modals/add-city/add-city.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public person: any;
  public status: IHttpStatus;

  constructor(
    private navCtrl: NavController,
    private homeService: HomeService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.getPerson();
  }

  public getPerson() {
    this.status = HttpStatus.isLoading();
    this.homeService.getRandomPerson()
      .subscribe(
        data => {
          this.status = HttpStatus.isSuccess();
          this.person = data;
        },
        () => this.status = HttpStatus.isError()
      );
  }

  public navigateTo() {
    this.navCtrl.navigateForward('/detail');
  }

  public async addCity() {
    const modal = await  this.modalController.create({
      component: AddCityComponent,
      swipeToClose: true,
      showBackdrop: true
    });

    await modal.present();
  }

}

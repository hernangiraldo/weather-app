import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavController } from '@ionic/angular';

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
    private navCtrl: NavController
  ) {
    this.translate.use('es');
    this.navCtrl.navigateRoot('/');
  }

}

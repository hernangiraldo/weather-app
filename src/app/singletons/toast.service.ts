import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { ToastTypes } from '@models/enum';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private translate: TranslateService,
    private toastController: ToastController
  ) { }

  public async showToast(key: string, type: ToastTypes = ToastTypes.ERROR) {
    const message = this.translate.instant(key || 'default');

    const toast = await this.toastController.create({
      message,
      position: 'top',
      cssClass: `custom-toast ${type.toString()}`,
      duration: 3000,
    });

    await toast.present();
  }
}

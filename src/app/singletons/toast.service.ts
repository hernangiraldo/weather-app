import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { ToastTypes } from '@models/enum';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastController: ToastController
  ) { }

  public async showToast(key: string, type: ToastTypes) {
    const message = '';

    const toast = await this.toastController.create({
      message,
      position: 'top',
      cssClass: type.toString(),
      duration: 3000,
    });

    await toast.present();
  }
}

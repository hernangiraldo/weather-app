import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

const MODULES = [
  CommonModule,
  IonicModule,
]

@NgModule({
  declarations: [],
  imports: [
    ...MODULES,
    TranslateModule.forChild()
  ],
  exports: [
    ...MODULES,
    TranslateModule
  ]
})
export class SharedModule { }

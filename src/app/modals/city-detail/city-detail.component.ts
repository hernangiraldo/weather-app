import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CityDetailService } from '@app/modals/city-detail/city-detail.service';
import { ConsolidatedWeather } from '@models/dto';
import { HttpStatus, IHttpStatus } from '@models/class';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.scss'],
})
export class CityDetailComponent implements OnInit {

  @Input() cityId: number;

  public days: ConsolidatedWeather[];
  public status: IHttpStatus;

  constructor(
    private modalController: ModalController,
    private cityDetailService: CityDetailService
  ) { }

  ngOnInit() {
    this.getFiveDays();
  }

  public getFiveDays() {
    this.status = HttpStatus.isLoading();
    this.cityDetailService.getLasFiveDays(this.cityId).subscribe(
      data => {
        this.status = HttpStatus.isSuccess();
        this.days = data;
      }
    );
  }

  public closeModal() {
    this.modalController.dismiss();
  }

}

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { fromEvent, of } from 'rxjs';
import { City, HttpStatus, IHttpStatus } from '@models/class';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { AddCityService } from '@app/modals/add-city/add-city.service';
import { CitiesService } from '@singletons/cities.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss'],
})
export class AddCityComponent implements AfterViewInit {

  @ViewChild('searchInput') searchInput: ElementRef;

  public cities: City[] = [];
  public status: IHttpStatus;
  public detailStatus: IHttpStatus;

  constructor(
    private modalController: ModalController,
    private addCityService: AddCityService,
    private citiesService: CitiesService
  ) {
    this.status = HttpStatus.init();
    this.detailStatus = HttpStatus.init();
  }

  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        debounceTime(200),
        map((v: Event) => (v?.target as HTMLInputElement)?.value),
        distinctUntilChanged(),
        switchMap(criteria => {
          this.status = HttpStatus.isLoading();
          if (!criteria) {
            this.status = HttpStatus.isEmpty();
            return of([]);
          } else {
            return this.addCityService.getCitiesByQuery(criteria);
          }
        })
      ).subscribe(
        cities => {
          if (!cities.length) {
            this.status = HttpStatus.isEmpty();
            return;
          }

          this.status = HttpStatus.isSuccess();
          this.cities = cities;
        },
      () => {
        this.status = HttpStatus.isError();
      }
    );
  }

  public saveNewCity(city: City): void {
    this.detailStatus = HttpStatus.isLoading();
    this.addCityService.getDetailCity(city.id)
      .subscribe(
        detail => {
          this.detailStatus = HttpStatus.isSuccess();
          city.weather = detail;
          this.citiesService.addUserCity(city);
        }
      );
  }

  public closeModal(): void {
    this.modalController.dismiss();
  }

}

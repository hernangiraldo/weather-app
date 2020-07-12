import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { City } from '@models/class';
import { ToastService } from '@singletons/toast.service';
import { ToastTypes } from '@models/enum';
import { StorageService } from '@singletons/storage.service';
import { CityWeatherDetailResponseDto } from '@models/dto/CityWeatherDetailResponse.dto';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private cities: BehaviorSubject<City[]> = new BehaviorSubject<City[]>([]);

  constructor(
    private toastService: ToastService,
    private storageService: StorageService
  ) { }

  public getFavoritesCities(): Observable<City[]> {
    return this.cities.asObservable();
  }

  public init(cities: City[]): void {
    this.cities.next(cities);
  }

  public addUserCity(city: City): void {
    const current = this.cities.getValue() || [];
    const exist = current.find(c => c.id === city.id);

    if (!!exist) {
      this.toastService.showToast('cityExist', ToastTypes.INFO);
      return;
    }

    const newFavorites = [...current, city];
    this.storageService.setToStorage('favorites', newFavorites);
    this.cities.next(newFavorites);
    this.toastService.showToast('citySaved', ToastTypes.SUCCESS);
  }

  public removeUserCity(id: number): void {
    const newFavorites = this.cities.getValue().filter(c => c.id !== id);
    this.storageService.setToStorage('favorites', newFavorites);
    this.cities.next(newFavorites);
  }
}

import { Injectable } from '@angular/core';
import { HttpInvokeService } from '@singletons/http-invoke.service';
import { Observable } from 'rxjs';
import { City } from '@models/class';
import { CityWeatherDetailResponseDto, SearchCityResponseDto } from '@models/dto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddCityService {

  constructor(
    private http: HttpInvokeService
  ) { }

  public getCitiesByQuery(query: string): Observable<City[]> {
    return this.http.get<SearchCityResponseDto[]>(`/location/search/?query=${query}`)
      .pipe(
        map(cities => {
          debugger
          return cities.map(c => new City(c.woeid, c.title));
        })
      );
  }

  public getDetailCity(cityId: number) {
    return this.http.get<CityWeatherDetailResponseDto>(`/location/${cityId}`)
      .pipe(
        map(r => {
          debugger
          return r;
        })
      );
  }

}

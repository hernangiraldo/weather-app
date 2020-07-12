import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { HttpInvokeService } from '@singletons/http-invoke.service';
import * as moment from 'moment';
import { ConsolidatedWeather } from '@models/dto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityDetailService {

  constructor(
    private http: HttpInvokeService
  ) { }

  private getLastFiveDates(): string[] {
    let dates: string[] = [];

    for (let i = 0; i < 5 ; i++) {
      const date = moment().add(i, 'day').format('DD-MM-YYYY').split('-');
      dates = [
        ...dates,
        `${date[2]}/${date[1]}/${date[0]}`
      ];
    }

    return  dates;
  }

  public getLasFiveDays(cityId: number): Observable<ConsolidatedWeather[]> {
    const dates = this.getLastFiveDates();

    return forkJoin(
      [
        this.http.get<ConsolidatedWeather[]>(`/location/${cityId}/${dates[0]}`),
        this.http.get<ConsolidatedWeather[]>(`/location/${cityId}/${dates[1]}`),
        this.http.get<ConsolidatedWeather[]>(`/location/${cityId}/${dates[2]}`),
        this.http.get<ConsolidatedWeather[]>(`/location/${cityId}/${dates[3]}`),
        this.http.get<ConsolidatedWeather[]>(`/location/${cityId}/${dates[4]}`)
      ]
    ).pipe(
      map(data => (
        [
          data[0][0],
          data[1][0],
          data[2][0],
          data[3][0],
          data[4][0]
        ]
      ))
    );
  }
}

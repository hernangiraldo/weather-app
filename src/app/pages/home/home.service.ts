import { Injectable } from '@angular/core';
import { HttpInvokeService } from '@singletons/http-invoke.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpInvokeService
  ) { }

  public getRandomPerson(): Observable<any> {
    return this.http.get();
  }

}

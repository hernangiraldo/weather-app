import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Platform } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class HttpInvokeService {

  private readonly url: string;

  constructor(
    private httpClient: HttpClient,
    private http: HTTP,
    private platform: Platform
  ) {
    this.url = environment.api_url;
  }

  public get<T>(path?: string): Observable<T> {
    const url = `${this.url}/${path || ''}`;

    if (this.platform.is('capacitor')) {
      return from(
        this.http.get(url, {}, {})
          .then(data => JSON.parse(data.data))
          .catch(err => err)
      );
    }

    return this.httpClient.get<T>(url);
  }

  public post<X, T>(body: X): Observable<T> {
    return this.httpClient.post<T>('', body);
  }

  public put<X, T>(body: X): Observable<T> {
    return this.httpClient.put<T>('', body);
  }

  public delete() {
    return this.httpClient.delete('');
  }

}

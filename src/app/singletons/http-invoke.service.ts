import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpInvokeService {

  private readonly url: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.url = environment.api_url;
  }

  public get<T>(path?: string): Observable<T> {
    const url = `${this.url}/${path || ''}`;
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

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public getFromStorage<T>(key: string) {
    const data = localStorage.getItem(key);

    if (!data) {
      return null;
    }
    const toReturn = JSON.parse(decodeURIComponent(data));
    return  toReturn as T;
  }

  public setToStorage(key: string, data: any) {
    return localStorage.setItem(key, encodeURIComponent(JSON.stringify(data)));
  }

  public deleteFromStorage(key: string) {
    return localStorage.removeItem(key);
  }

}

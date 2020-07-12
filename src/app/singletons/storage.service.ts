import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public getFromStorage<T>(key: string) {
    const data = localStorage.getItem(key);

    if (!!data) {
      return null;
    }

    return JSON.parse(data) as T;
  }

  public setFromStorage(key: string, data: any) {
    return localStorage.setItem(key, JSON.stringify(data));
  }

  public deteleFromStorage(key: string) {
    return localStorage.removeItem(key);
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamsService {

  private _params: any;

  constructor() { }

  public getParams<T>() {
    const tmp = Object.assign({}, this._params) as T;
    this._params = null;
    return tmp;
  }

  public setParams(data: any) {
    this._params = data;
  }
}

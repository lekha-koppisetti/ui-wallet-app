import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage = window.localStorage;

  constructor() { }

  setItem(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    let value = this.storage.getItem(key);
    if(value) value = JSON.parse(value)
    return value;
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }
}

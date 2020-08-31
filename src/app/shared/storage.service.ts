import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
const SECRET_KEY = 'secret_key';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  encrypt(data): any {
    data = CryptoJS.AES.encrypt(data, SECRET_KEY);
    data = data.toString();
    return data;
  }

  decrypt(data): any {
    data = CryptoJS.AES.decrypt(data, SECRET_KEY);
    data = data.toString(CryptoJS.enc.Utf8);
    return data;
  }

  setItem(key: string, value: any): any {
    const encryptedData = this.encrypt(JSON.stringify(value));
    localStorage.setItem(key, encryptedData);
  }

  getItem(key): any {
    const data = localStorage.getItem(key);
    const deData = this.decrypt(data);
    return JSON.parse(deData);
  }

  clear(): any {
    localStorage.clear();
  }

  checkForKeyinStorage(key): any {
    return localStorage.getItem(key);
  }
}

import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class LocalService {

    constructor(private storageService: StorageService) { }

    setJsonValue(key: string, value: any): void {
        this.storageService.setItem(key, value);
    }

    getJsonValue(key: string): void {
        return this.storageService.getItem(key);
    }

    clearToken(): void {
        return this.storageService.clear();
    }

    getKeyinStorage(key): any {
        return this.storageService.checkForKeyinStorage(key);
    }
}

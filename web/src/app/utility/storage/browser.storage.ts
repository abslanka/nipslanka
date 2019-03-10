import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { IStorage } from './interfaces/storage.interface';

@Injectable()
export class BrowserStorage implements IStorage {
  [index: number]: string;
  [key: string]: any;
  length: number;

  constructor(private cookieService: CookieService) {}

  public clear(): void {
    this.cookieService.deleteAll();
  }

  public getItem(key: string): string {
    try {
      return JSON.parse(this.cookieService.get(key));
    } catch (error) {
      return this.cookieService.get(key);
    }
  }

  public key(index: number): string {
    return this.cookieService.getAll().propertyIsEnumerable[index];
  }

  public removeItem(key: string): void {
    this.cookieService.delete(key, '/');
  }

  public setItem(key: string, data: any): void {
    try {
      this.cookieService.set(key, JSON.stringify(data), undefined, '/');
    } catch (error) {
      this.cookieService.set(key, data, undefined, '/');
    }
  }
}

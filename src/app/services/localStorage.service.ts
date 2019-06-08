import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import {ILocalStorageService} from '../interfaces/iLocalStorage.service';

@Injectable()
export class LocalStorageService implements ILocalStorageService {

  protected subjects: {[key: string]: BehaviorSubject<any>} = {};

  select<T>(key: string, defaultValue: T = null): Observable<T> {
    if (this.subjects.hasOwnProperty(key)) {
      return this.subjects[key];
    }

    if (!window.localStorage.getItem(key) && defaultValue) {
      window.localStorage.setItem(key, JSON.stringify(defaultValue));
    }

    const value = window.localStorage.getItem(key)
      ? JSON.parse(window.localStorage.getItem(key))
      : defaultValue;

    return this.subjects[key] = new BehaviorSubject(value);
  }

  set<T>(key: string, value: T): void {
    window.localStorage.setItem(key, JSON.stringify(value));

    if (this.subjects.hasOwnProperty(key)) {
      this.subjects[key].next(value);
    }
  }

  remove(key: string): void {
    window.localStorage.removeItem(key);

    if (this.subjects.hasOwnProperty(key)) {
      this.subjects[key].next(null);
    }
  }
}
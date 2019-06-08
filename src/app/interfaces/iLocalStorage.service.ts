import { Observable } from 'rxjs';

export interface ILocalStorageService {
    select<T>(key: string, defaultValue: T): Observable<T>;
    set(key: string, value: any): void;
    remove(key: string): void;
  }
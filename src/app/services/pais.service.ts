import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  api: string = "https://restcountries.com/v3.1/1";
  // api:  string = "https://flagsapi.com/BE/flat/64.png"
  // https://restcountries.com/
  // <img src="https://flagsapi.com/:country_code/:style/:size.png">
  constructor(private http: HttpClient) {
  }
  get(): Observable<any> {
    return this.http.get<any>(this.api);
  }
}
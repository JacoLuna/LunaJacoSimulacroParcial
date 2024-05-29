import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pais } from '../classes/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  api: string = "https://restcountries.com/v3.1/1";
  private apiUrl = 'https://restfulcountries.com/api/v1/countries';
  private token = '882|ydfIQdBlptvxVblx1OzsqaoS6SX02c1pifGtm03G';
  // 914|47zZfmhZSprFoQvjl1tmrvfqFA4zX3YrjL8GWk1F
                 
  constructor(private http: HttpClient) {
  }

  // get(): Observable<any> {
  //   return this.http.get<any>(this.api);
  // }

  getPaises(perPage: number = 250): Observable<Pais[]> {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get<any>(`${this.apiUrl}?per_page=${perPage}`, { headers }).pipe(
      map(response => {
        if (!Array.isArray(response)) {
          response = response.data; // Ajustar esto según la estructura real de la respuesta
        }
        // return response;
        return this.filtrarYConvertirPaises(response);
      })
    );
  }

  private filtrarYConvertirPaises(data: any[]): Pais[] {
    const paisesBuscados = ['Argentina', 'Chile', 'Spain', 'Italy', 'Japan', 'Egypt'];
    return data
      .filter(pais => paisesBuscados.includes(pais.name))
      .map(pais => new Pais(
        pais.name,
        pais.href.flag,
        pais.continent
      ));
  }
}
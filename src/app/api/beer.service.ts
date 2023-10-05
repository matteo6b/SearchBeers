import { Injectable } from '@angular/core';
import { Beer } from 'src/app/models/beer/Beer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BeerService {
  private beerUrl = 'https://api.punkapi.com/v2/beers';

  constructor(private http: HttpClient) {}

  getBeers(page: number, perPage: number, search: string): Observable<Beer[]> {
    if (search === '') {
      return this.http.get<Beer[]>(
        `${this.beerUrl}?page=${page}&per_page=${perPage}`
      );
    } else {
      return this.http.get<Beer[]>(
        `${this.beerUrl}?page=${page}&per_page=${perPage}&beer_name=${search}`
      );
    }
  }
}

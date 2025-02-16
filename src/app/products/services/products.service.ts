import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponse } from '../interfaces/products.inteface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  readonly default_laguage_code: string = 'es';
  readonly default_contry_code: string = 'es';
  readonly default_limit_producrs: string = '8';

  readonly url_products: string = `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=${this.default_contry_code}&lang=${this.default_laguage_code}&currentpage=0&pagesize=${this.default_limit_producrs}&categories=`;
  readonly options_products = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6185a78aa2mshb04ae8991085691p1d093bjsnae8623070f4a',
      'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
    },
  };

  public categorySelected: string = '';

  constructor(private http: HttpClient) {}

  public getProducts(categorySelected: string): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(
      this.url_products + categorySelected,
      this.options_products,
    );
  }
}

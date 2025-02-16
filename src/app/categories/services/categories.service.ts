import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Category, CategoryRespones } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private url: string = 'http://localhost:3000/categories';

  public categorySelected: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  /*public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }*/

  public getCategories(): Observable<CategoryRespones> {
    return this.http.get<Category[]>(this.url).pipe(
      map((categories: Category[]): CategoryRespones => {
        let response: CategoryRespones = {} as CategoryRespones;
        response.categories = categories;
        return response;
      }),
    );
  }

  public setCategorySelected(categorySelected: string): void {
    this.categorySelected.next(categorySelected);
  }
}

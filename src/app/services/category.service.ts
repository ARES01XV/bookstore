import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categories } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private base_Url = 'http://localhost:3000/category/';

  constructor(private http: HttpClient) {}

  get_All_Category(): Observable<Categories> {
    return this.http.get<Categories>(this.base_Url);
  }

  create_Category(data: any): Observable<Categories> {
    return this.http.post<Categories>(`${this.base_Url + 'create_category'}`, data);
  }

  get_Category_Id(id: any): Observable<Categories> {
    return this.http.get<Categories>(`${this.base_Url + 'category_By_Id'}/${id}`
    );
  }

  update_Category(id: any, data: any): Observable<any> {
    return this.http.put<Categories>(
      `${this.base_Url + 'update_category'}/${id}`,
      data
    );
  }

  delete_category(id: any): Observable<Categories> {
    return this.http.delete<Categories>(`${this.base_Url + 'delete_category'}/${id}`);
  }
}

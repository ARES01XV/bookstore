import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private API_URL = 'http://localhost:3000/cart/';

  constructor(private http: HttpClient) {}

  get_items(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.API_URL)
  }

  add_item(data: any): Observable<any> {
    return this.http.post<Cart[]>(this.API_URL, data)
  }

  delete_item(id: any): Observable<Cart[]> {
    return this.http.delete<Cart[]>(`${this.API_URL}/${id}`)
  }
}

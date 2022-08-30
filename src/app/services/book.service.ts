import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Books } from '../interfaces/book.interface';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private base_Url = 'http://localhost:3000/books/';

  constructor(private http: HttpClient) {}

  get_All_Book(): Observable<Books> {
    return this.http.get<Books>(this.base_Url);
  }

  get_Category_Books(id: any): Observable<any> {
    return this.http.get<Books>(
      `${this.base_Url + 'get_category_books'}/${id}`
    );
  }

  create_Book(data: any): Observable<Books> {
    return this.http.post<Books>(`${this.base_Url + 'create_book'}`, data);
  }

  get_Book_Id(id: any): Observable<Books> {
    return this.http.get<Books>(`${this.base_Url + 'book_By_Id'}/${id}`);
  }

  update_Book(id: any, data: any): Observable<any> {
    return this.http.put<Books>(`${this.base_Url + 'update_book'}/${id}`, data);
  }

  delete_Book(id: any): Observable<Books> {
    return this.http.delete<Books>(`${this.base_Url + 'delete_book'}/${id}`);
  }

  admin_get_books(): Observable<Books> {
    return this.http.get<Books>(`${this.base_Url + 'admin_books'}`);
  }
}

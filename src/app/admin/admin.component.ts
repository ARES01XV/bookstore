import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { log } from 'console';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  id: any;
  books: any = [];
  category: any = [];

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.get_Books_By_Id(this.route.snapshot.paramMap.get('id'));
    this.get_Books_By_Id('categoryID');
  }

  get_Books_By_Id(categoryID: String) {
    this.bookService.admin_get_books().subscribe((data: any) => {
      this.books = data.results;
      // this.category = data.results.categoryID;
      console.log(data.length);
      // for (var i = 0; i <= 9; i++) {
      // for (var i = 0; i <= data.length; i++) {
      //   console.log(
      //     `${this.books[i].author} - ${this.books[i].book_name} - ${this.books[i].categoryID.category}`
      //   );
      // }
    });
  }

  delete_book(id: any) {
    this.bookService.delete_Book(id).subscribe(() => {
      alert('Book deleted!');
      window.location.reload();
    });
  }
}

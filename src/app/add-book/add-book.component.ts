import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Categories } from '../interfaces/category.interface';
import { Books } from '../interfaces/book.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  categories: Categories[] = [];

  constructor(
    private bookService: BookService,
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService.get_All_Category().subscribe((categories: any) => {
      this.categories = categories.results;
      console.log(this.categories);
    });
  }

  add_books = this.fb.group({
    image_url: ['', Validators.required],
    book_name: ['', Validators.required],
    author: ['', Validators.required],
    price: ['', Validators.required],
    categoryID: ['', Validators.required],
  });

  add_book() {
    this.bookService
      .create_Book(this.add_books.value)
      .subscribe((books: any) => {
        console.log(books);
        alert('Book added');
      });
    this.router.navigate(['/admin']);
  }
}

import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { CategoryService } from '../services/category.service';
import { Books } from '../interfaces/book.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent implements OnInit {
  book: any = [];
  category: any = [];

  constructor(
    private bookService: BookService,
    private categoryService: CategoryService,
    private activated_route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  updateFrom = this.formBuilder.group({
    categoryID: ['', Validators.required],
    book_name: ['', Validators.required],
    image_url: ['', Validators.required],
    author: ['', Validators.required],
    price: ['', Validators.required],
  });

  ngOnInit(): void {
    this.get_book(this.activated_route.snapshot.paramMap.get('id'));
    this.get_categories();
  }

  get_book(id: any) {
    this.bookService.get_Book_Id(id).subscribe((data: any) => {
      this.book = data.results;
      this.updateFrom.setValue (
        {
          categoryID: this.book.categoryID,
          book_name: this.book.book_name,
          image_url: this.book.image_url,
          author: this.book.author,
          price: this.book.price,
        }
      )
      console.log(this.book);
    });
  }

  get_categories() {
    this.categoryService.get_All_Category().subscribe((data: any) => {
      this.category = data.results;
      console.log(this.category);
    });
  }

  update_book(id: string) {
    this.bookService.update_Book(id, this.updateFrom.value).subscribe((data) => {
      if(!data) {
        alert("Book not updated")
      } else {
        console.log(data)
        alert('Book Updated')
      }
        console.log(data);
    });
    this.router.navigate(['/admin']);
  }
}

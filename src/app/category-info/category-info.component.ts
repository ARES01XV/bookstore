import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Books } from '../interfaces/book.interface';
import { BookService } from '../services/book.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-category-info',
  templateUrl: './category-info.component.html',
  styleUrls: ['./category-info.component.css'],
})
export class CategoryInfoComponent implements OnInit {
  id: any;
  books: any = [];
  category: any = [];
  refreshed = true;
  addCart: any;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router,
    private cartService: CartService,
    private fb: FormBuilder
  ) {
    this.addCart= fb.group ({
    productID: ''
  });
  }

  ngOnInit(): void {
    this.get_Books_By_Id(this.route.snapshot.paramMap.get('id'));
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }
  // setTimeout('', 500);

  get_Books_By_Id(id: any) {
    this.bookService.get_Category_Books(id).subscribe((data: any) => {
      this.books = data.results;
      console.log(this.books);
      this.refreshed = false;
    });
    console.log(this.books.results);
  }

  add_item() {
    this.cartService.add_item(this.addCart.value).subscribe((data) => {
      console.log(data);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  books: any = [];
  addCart: any = '';
  refreshed = true;

  constructor(
    private activated_route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private cartService: CartService,
    private fb: FormBuilder
  ) {}

  addToCart = this.fb.group({
    productID: ['', Validators.required],
  });

  ngOnInit(): void {
    this.get_Books_By_Id(this.activated_route.snapshot.paramMap.get('id'));
  }

  get_Books_By_Id(id: any) {
    this.bookService.get_Book_Id(id).subscribe((data: any) => {
      this.books = data.results;
      this.addToCart.setValue({ productID: this.books._id });
      console.log(this.books);
      this.refreshed = false;
    });
    console.log(this.books.results);
  }

  add_item() {
    this.cartService.add_item(this.addToCart.value).subscribe((data) => {
      alert("Great choice, we'll add it to your cart");
      console.log(data);
    });
    this.router.navigate(['/categories']);
  }
}

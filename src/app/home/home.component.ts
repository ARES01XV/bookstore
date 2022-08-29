import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Categories } from '../interfaces/category.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  category: any;
  constructor(private categoryService: CategoryService) {}

  // refresh(): void {}

  ngOnInit(): void {
  }
}

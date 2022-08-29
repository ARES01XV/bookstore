import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from '../interfaces/category.interface';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  aa: boolean = false;
  classics: boolean = false;
  comics: boolean = false;
  fantasy: boolean = false;
  horror: boolean = false;

  category: Categories[] = [];

  //TOGGLE BOOK CATEGORY----------------------------
  toggle(content: string = 'text') {
    switch (content) {
      case 'aa':
        this.aa = true;
        this.classics = false;
        this.comics = false;
        this.fantasy = false;
        this.horror = false;
        break;

      case 'classics':
        this.aa = false;
        this.classics = true;
        this.comics = false;
        this.fantasy = false;
        this.horror = false;
        break;

      case 'comics':
        this.aa = false;
        this.classics = false;
        this.comics = true;
        this.fantasy = false;
        this.horror = false;
        break;

      case 'fantasy':
        this.aa = false;
        this.classics = false;
        this.comics = false;
        this.fantasy = true;
        this.horror = false;
        break;

      case 'horror':
        this.aa = false;
        this.classics = false;
        this.comics = false;
        this.fantasy = false;
        this.horror = true;
        break;

      default:
        break;
    }
  }

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService.get_All_Category().subscribe((data: any) => {
      console.log(data);
      this.category = data.results;
    });
  }
}

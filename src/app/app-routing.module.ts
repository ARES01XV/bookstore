import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CategoryInfoComponent } from './category-info/category-info.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'sign_in', component: SignInComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'categories',
    component: CategoriesComponent,
    children: [
      { path: 'item/:id', component: CategoryInfoComponent },
      {
        path: '',
        redirectTo: 'item/62ff49023c854a0a740c9592',
        pathMatch: 'full',
      },
    ],
  },
  { path: 'cart', component: CartComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'add_book', component: AddBookComponent },
  { path: 'edit_book/:id', component: EditBookComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'item/:id', component: ItemComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}

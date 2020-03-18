import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IntroductionComponent } from "./home/app-introduction.component";
import { ProductListComponent } from './book/list/book-list.component';
import { AddingBookComponent } from './book/create/book-add.component';
import { BookDetailComponent } from './book/detail/book-detail.component';

const routes: Routes = [
  { path: "", component: IntroductionComponent },
  { path: "home", component: IntroductionComponent },
  { path: "product/:category", component: ProductListComponent },
  { path: "product", component: ProductListComponent },
  { path: "add", component: AddingBookComponent },
  { path: "product/book/:id", component: BookDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

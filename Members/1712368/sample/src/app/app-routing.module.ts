import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IntroductionComponent } from "./home/app-introduction.component";
import { ProductListComponent } from './book/list/book-list.component';
import { AddingBookComponent } from './book/create/book-add.component';

const routes: Routes = [
  { path: "", component: IntroductionComponent },
  { path: "home", component: IntroductionComponent },
  { path: "product", component: ProductListComponent },
  { path: "create", component: AddingBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

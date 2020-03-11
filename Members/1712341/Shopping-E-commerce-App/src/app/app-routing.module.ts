import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DetailComponent } from './Components/Pages/Detail/detail.component';
import { CategoriesComponent } from './Components/Pages/Categories/cat.component';
import { HomeComponent } from './Components/Pages/Home/home.component';

const routesConfig: Routes = [
  {path: 'cate', component: CategoriesComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [DetailComponent, CategoriesComponent, HomeComponent],
  imports: [RouterModule.forRoot(routesConfig), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

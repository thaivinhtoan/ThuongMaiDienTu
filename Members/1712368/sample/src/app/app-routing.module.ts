import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IntroductionComponent } from "./home/app-introduction.component";

const routes: Routes = [
  { path: "", component: IntroductionComponent },
  { path: "home", component: IntroductionComponent },
  { path: "product", component: IntroductionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

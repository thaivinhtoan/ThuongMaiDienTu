import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Components/Blocks/Menu/menu.component';
import { SliderComponent } from './Components/Blocks/Slider/slider.component';
import { UsersComponent } from './Components/Blocks/Users/user.component';
import { CateComponent } from './Components/Blocks/Cate/cate.component';
import { from } from 'rxjs';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SliderComponent,
    UsersComponent,
    CateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }

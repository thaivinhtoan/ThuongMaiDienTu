import { Component } from '@angular/core';
import { CategoryService } from '../../../Services/category.module';

@Component({
  templateUrl: 'menu.component.html',
  selector: 'menu',
  providers: [CategoryService]
})

export class MenuComponent{
  arrCate;
  constructor( private cateService: CategoryService ){
    cateService.getCategory().subscribe(data=>{    // subscribe: chờ cho getCategory() chạy xong mới được xử lý tiếp kết quả
      this.arrCate=(data);
    });
  }
}

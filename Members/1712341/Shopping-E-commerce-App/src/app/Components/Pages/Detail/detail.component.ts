import { Component } from '@angular/core';
import { SubService } from '../../../Services/subcate.module';
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: 'detail.component.html',
  selector: 'detail',
  providers: [SubService]


})

export class DetailComponent{
  CategoryId;
  // CategoryName;
  arrProducts;
  constructor( private SubService: SubService, private route: ActivatedRoute ){
    this.CategoryId =  this.route.snapshot.paramMap.get("id");
    // this.CategoryName = this.route.snapshot.paramMap.get("name");
    SubService.getSubcate(this.CategoryId).subscribe(data=>{
      this.arrProducts = data;
      console.log(data);
    });
  }
}


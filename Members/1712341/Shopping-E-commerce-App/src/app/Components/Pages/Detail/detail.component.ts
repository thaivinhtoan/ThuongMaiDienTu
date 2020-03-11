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
  arrProducts;
  constructor( private SubService: SubService, private route: ActivatedRoute ){
    this.CategoryId =  this.route.snapshot.paramMap.get("id")
    SubService.getSubcate(this.CategoryId).subscribe(data=>{
      console.log('data');
      console.log(data);
    });
  }
}


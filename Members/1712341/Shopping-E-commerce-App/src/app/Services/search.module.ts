// viết service để req ra bên ngoai, Móc dữ liệu từ server về Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//khai bao service
@Injectable()

export class SearchService{
  constructor( private http: HttpClient ){  // req ra ben ngoai

  }
  getProduct(name){
    // options
    let options = {
      headers: new HttpHeaders().set("Content-type", "application/x-www-form-urlencoded")
    }
    return this.http.post("http://localhost:3000/api/search/" + name, options);
  }
}

// viết service để req ra bên ngoai, Móc dữ liệu từ server về Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//khai bao service
@Injectable()

export class MemberService{
  constructor( private http: HttpClient ){  // req ra ben ngoai

  }
  getMember(){
    // options
    let options = {
      headers: new HttpHeaders().set("Content-type", "application/x-www-form-urlencoded")
    }
    return this.http.post("http://localhost:3000/api/member", options);
  }
}

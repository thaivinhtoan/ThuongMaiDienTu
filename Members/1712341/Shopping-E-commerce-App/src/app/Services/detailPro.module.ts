

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//khai bao service
@Injectable()
export class DetailProService {
  constructor(private http: HttpClient) {
  }
  getDetailPro(id) {
    // options
    let options = {
      headers: new HttpHeaders().set("Content-type", "application/x-www-form-urlencoded")
    };
    return this.http.post("http://localhost:3000/api/detailPro/" + id, options);
  }
}

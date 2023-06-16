import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get('http://localhost:4200/assets/mock/mockData.json');
  }
}

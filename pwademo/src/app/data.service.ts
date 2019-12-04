import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser() {
    return this.httpClient.get('http://192.168.0.74:8081/user/getall');
  }
}

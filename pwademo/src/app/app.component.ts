import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'pwademo';
  hello;
  list;
  value;
  constructor(
    private http: HttpClient
  ) {
  }
  ngOnInit(): void {
    // {responseType: 'text'} because response is not coming in json format it returning just hello world
    this.http.get('http://localhost:8080/hello', { responseType: 'text' }).subscribe(result => {
      this.hello = result;

    }, err => console.log(err));
    this.getList();

  }

  add() {
    this.http.post('http://localhost:8080/add', null, {
      params: new HttpParams().append('val', this.value)
    }).subscribe(res => {
      this.getList();
    }, err => console.log(err)
    );
  }
  getList() {
    this.http.get('http://localhost:8080/get').subscribe(result => this.list = result, err => console.log(err));
  }
}

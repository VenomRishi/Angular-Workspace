import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pwademo';

  email: any;
  constructor(
    private updates: SwUpdate,
    private data: DataService
  ) {
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  }
  ngOnInit() {
    this.data.getUser().subscribe(
      res => {
        console.log(res);
        this.email = res;
      }
    );
  }
}

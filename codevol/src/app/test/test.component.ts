import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You choose red</div>
    <div *ngSwitchCase="'blue'">You choose blue</div>
    <div *ngSwitchCase="'green'">You choose green</div>
    <div *ngSwitchDefault>Pick color</div>
  </div>
  `,
  styles: [`
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-italic{
      font-style:italic;
    }
  `]
})
export class TestComponent implements OnInit {
  name = 'rishikesh';
  public messageClass = {
    'text-success': false,
    'text-danger': true,
    'text-italic': true
  };
  color = 'red';
  hey = 'property';
  doSomething: string;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css'],
})
export class PagenotfoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  //ngIf Demo
  showElement = true;

  //ngFor
  message = ['Page on Maintenance'];
}

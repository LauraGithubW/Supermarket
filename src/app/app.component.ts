import { Component, Input, OnInit } from '@angular/core';
import { Item } from './models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'shoppingCart';

  ngOnInit(): void {}
}

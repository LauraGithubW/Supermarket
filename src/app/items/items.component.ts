import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];

  constructor() {}

  ngOnInit(): void {
    //Aquí creo los items para luego recorrerlos y mostrarlos en la vista
    this.items = [
      {
        title: 'Apple',
        id: 1,
        quantity: 1,
        price: 1,
        img: '../assets/apples.jpg',
        selected: false,
      },
      {
        title: 'Avocado',
        id: 2,
        quantity: 1,
        price: 4.99,
        img: '../assets/avocado.jpg',
        selected: false,
      },
      {
        title: 'Broccoli',
        id: 3,
        quantity: 1,
        price: 1,
        img: '../assets/broccoli.png',
        selected: false,
      },
      {
        title: 'Cheese',
        quantity: 1,
        price: 2,
        id: 4,
        img: '../assets/cheese.jpg',
        selected: false,
      },
      {
        title: 'Chickpea',
        id: 5,
        quantity: 1,
        price: 1.5,
        img: '../assets/chickpea.jpg',
        selected: false,
      },
      {
        title: 'Lemon',
        id: 6,
        quantity: 1,
        price: 0.5,
        img: '../assets/lemons.jpg',
        selected: false,
      },
      {
        title: 'Milk',
        id: 7,
        quantity: 1,
        price: 1,
        img: '../assets/milk.jpg',
        selected: false,
      },
      {
        title: 'Orange',
        id: 8,
        quantity: 1,
        price: 2.5,
        img: '../assets/oranges.jpg',
        selected: false,
      },
      {
        title: 'Pasta',
        id: 9,
        quantity: 1,
        price: 1,
        img: '../assets/pasta.jpg',
        selected: false,
      },
      {
        title: 'Rice',
        id: 10,
        quantity: 1,
        price: 1,
        img: '../assets/rice.jpg',
        selected: false,
      },
      {
        title: 'Tomato',
        id: 11,
        quantity: 1,
        price: 1.7,
        img: '../assets/tomatoes.jpg',
        selected: false,
      },
      {
        title: 'Zucchini',
        id: 12,
        quantity: 1,
        price: 0.99,
        img: '../assets/zucchini.jpg',
        selected: false,
      },
    ];
  }
}

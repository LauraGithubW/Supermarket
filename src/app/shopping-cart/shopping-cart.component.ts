import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit, OnChanges, OnDestroy {
  //Aquí recibimos el carrito y la variable show para mostrar u ocultar componentes o partes de compoentnes
  @Input() itemShopping: Item[] = [];
  @Input() show: boolean = false;
  //Esta es la suma total del precio que tiene que pagar el usuario
  total: number = 0;
  //Este es el producto que restaremos al total y que recibimos del componente delete para restar el precio del producto que se elimine
  productoEliminado: Item = new Item();

  @Input() productoIndividual: Item = new Item();

  pagado: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    //Aquí realizo una operación para sumar el precio total
    this.total = this.itemShopping.reduce(
      (acc, obj) => acc + obj.price * obj.quantity,
      0
    );
  }

  incrementQuantity(prod: Item) {
    prod.quantity++;
  }

  decrementQuantity(prod: Item) {
    if (prod.quantity > 1) {
      prod.quantity--;
    }
  }

  //Esta función lleva a la ruta pagado cuando se le da a buy para comprarlos productos y elimina todos los productos del carrito
  buyItem() {
    this.router.navigate(['pagado']);
    this.pagado = true;

    this.itemShopping.splice(0, this.itemShopping.length);
  }

  //Esta función recibe el producto eliminado para poder restar el precio del total
  deleteProduct(prod: Item) {
    this.productoEliminado = prod;

    this.total = this.total - this.productoEliminado.price;
  }
}

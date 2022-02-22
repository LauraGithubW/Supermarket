import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagado',
  templateUrl: './pagado.component.html',
  styleUrls: ['./pagado.component.css'],
})
export class PagadoComponent implements OnInit {
  //Esta función se usa para volver a la tienda una vez hemos comprado los productos
  back() {
    this.router.navigate(['']);
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}

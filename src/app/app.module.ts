import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ProductComponent } from './product/product.component';

import { DeleteComponent } from './delete/delete.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { PagadoComponent } from './pagado/pagado.component';
const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'pagado', component: PagadoComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ProductComponent,

    DeleteComponent,
    ShoppingCartComponent,
    HeaderComponent,
    PagadoComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

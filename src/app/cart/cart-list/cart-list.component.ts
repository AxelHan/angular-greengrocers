import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../cart-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy{
  items: any;
  total: number = 0;
  private cartItemsSubscription: Subscription;

  constructor(private readonly cartService: CartService){
    this.cartItemsSubscription = new Subscription();
  }

  async ngOnInit(){
    this.cartItemsSubscription = this.cartService.cartItemsSubject.subscribe(items =>
      this.items = items)
    this.cartItemsSubscription = this.cartService.totalSubject.subscribe(total =>
      this.total = total)
  }

  ngOnDestroy() {
    this.cartItemsSubscription.unsubscribe(); 
  }

}

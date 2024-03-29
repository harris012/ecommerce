import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carticon',
  templateUrl: './carticon.component.html',
  styleUrls: ['./carticon.component.css'],
})
export class CarticonComponent implements OnInit, OnDestroy {
  cartItemCount: number = 0;
  private cartItemsSubscription!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItemsSubscription = this.cartService
      .getCartItemsSubject()
      .subscribe((cartItems) => {
        this.cartItemCount = cartItems.length;
      });
  }

  ngOnDestroy(): void {
    this.cartItemsSubscription.unsubscribe();
  }
}

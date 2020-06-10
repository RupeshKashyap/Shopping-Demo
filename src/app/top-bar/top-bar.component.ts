import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  cartItems : any[];
  public cartSize:any = 0;

  constructor(private route: ActivatedRoute,
    private cartService: CartService) {
    }
  ngOnInit(): void {
    this.cartItems = this.cartService.items;
    this.cartSize = this.cartItems.length;
    // console.log("cart items",this.cartItems);
  }

  getItemSize(){
    let x = this.cartService.getItems ();
    console.log(x.length);
    
    return x.length;
  }

}

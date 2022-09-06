import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: any[] = []; // <- kui on SS tühi siis näitab HTMLis seda
  cartSum = 0;

  constructor() { }

  ngOnInit(): void {
    let cartSS = sessionStorage.getItem("cart");
    if (cartSS !== null) {
      this.cartProducts = JSON.parse(cartSS); // <- kui ei ole SS tühi. siis näitab HTMLis seda

    }
      
    this.cartProducts.forEach(element => this.cartSum = this.cartSum + element.product.price * element.quantity);

  }
  decreaseQuantity(cartProduct: any) {
    const index = this.cartProducts.indexOf(cartProduct);
    // const index = this.cartProducts.findIndex(element => element.product.id === cartProduct.product.id);
    this.cartProducts[index].quantity = this.cartProducts[index].quantity - 1;
    if (this.cartProducts[index].quantity <= 0) {
      // ostukorvis kustutamine t]pselt nagu veebipoes
      this.removeFromCart(cartProduct);
    }
    sessionStorage.setItem("cart", JSON.stringify(this.cartProducts));
    this.cartSum = 0;
    this.cartProducts.forEach(element => this.cartSum = this.cartSum + element.product.price * element.quantity);
  }

  increaseQuantity(cartProduct: any) {
    const index = this.cartProducts.indexOf(cartProduct);
    this.cartProducts[index].quantity = this.cartProducts[index].quantity + 1;
    sessionStorage.setItem("cart", JSON.stringify(this.cartProducts));
    this.cartSum = 0;
    this.cartProducts.forEach(element => this.cartSum = this.cartSum + element.product.price * element.quantity);
  }

  removeFromCart(cartProduct: any) {
    const index = this.cartProducts.indexOf(cartProduct);
    this.cartProducts.splice(index,1);
    sessionStorage.setItem("cart", JSON.stringify(this.cartProducts));
    this.cartSum = 0;
    this.cartProducts.forEach(element => this.cartSum = this.cartSum + element.product.price * element.quantity);
  }

}

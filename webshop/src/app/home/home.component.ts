import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from 'angular-toastify';
import { elementAt } from 'rxjs';
// import productsData from '../../assets/products.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = []; // <---- väljanäidatav lehel, muudan kogu aeg
  // filtreerin/sorteerin
  originalProducts: any[] = []; // <---- ei muuda kunagi, ainult muudan väärtust

  // products = productsData;
  categories: any[] = [];
  activeCategory = "";

  constructor(private _toastService: ToastService,
    private translateService: TranslateService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>("https://webshop08-5abed-default-rtdb.europe-west1.firebasedatabase.app/products.json").subscribe(productsFromDb => {
      this.products = productsFromDb;
      this.originalProducts = productsFromDb;
      this.categories = [...new Set(this.originalProducts.map(element => element.category))];
  });
  }

  filterByCategory(category: any) {
    if (category === '') {
      this.products = this.originalProducts; // this.products = productsData;
    } else {
      this.products = this.originalProducts.filter(element => element.category === category);
    }
    this.activeCategory = category;
  }

  sortAZ() {
    this.products.sort((a,b) => a.name.localeCompare(b.name));
  }

  sortZA() {
    this.products.sort((a,b) => b.name.localeCompare(a.name));
  }
  
  sortPriceAsc() {
    this.products.sort((a,b) => a.price - b.price);
  }

  sortPriceDesc() {
    this.products.sort((a,b) => b.price - a.price);
  }
  //        {product: {id: "sdss", name: "sdsdf", price: 324}, quantity}
  addToCart(product: any) {
    let cart = []; // <- kui on tühi siis lisab siia
    let cartSS = sessionStorage.getItem("cart");
    if (cartSS !== null) {
      cart = JSON.parse(cartSS); // <- kui ei ole tühi, siis lisab siia
    }
    // järjekorranumber näitab, kas on olemas või mitte 0,1,2,3,4,5,6,7,8,     -1
    const index = cart.findIndex((element: any) => element.product.id === product.id);
    if (index >= 0) {
        // kui on olema, siis suurenda kogust
        cart[index].quantity = cart[index].quantity + 1
    } else {
        // kui ei ole olemas, siis lisa juurde (push)
        cart.push({product: product, quatity: 1}); // <- lisab ühe juurde
    }
    sessionStorage.setItem("cart", JSON.stringify(cart));
    // parem klõps -> 
    this._toastService.success(this.translateService.instant("toast.added-to-cart"))
  }

  

}
 // FIREBASE seo ja kujunda nuppe
// Andmebaasiühendused
// kategoorijate muutmine


// Nortali proovitöö: saate harjutada proovitõõ järgi
// 14 sept <- töötukassa ametlik lõpp
// 19 sept <- meie viimane päev

//Lõpuprojekt + iseseisvalt mingisugune projekt:
// 1. Webshopi edasiarendus
// Youtube-i / Udemy järgi mingi projekt
// Täitsa nullist enda välja mõeldud (portfoolio, enda veebileht)

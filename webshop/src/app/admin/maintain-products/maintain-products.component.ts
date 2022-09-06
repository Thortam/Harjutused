import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from 'angular-toastify';
// import productsData from 'src/assets/products.json';
// import productsData from '../../../assets/products.json';
@Component({
  selector: 'app-maintain-products',
  templateUrl: './maintain-products.component.html',
  styleUrls: ['./maintain-products.component.css']
})
export class MaintainProductsComponent implements OnInit {
  products: any[] =[]; // HTML jaoks        
  // private products; <- kasutan kahes või enamas funtsioonis
  

  constructor(private _toastService: ToastService,
    private translateService: TranslateService,
    private http: HttpClient) { }

 addInfoToast() {
 }

  ngOnInit(): void {
    this.http.get<any[]>("https://webshop08-5abed-default-rtdb.europe-west1.firebasedatabase.app/products.json").subscribe(productsFromDb => 
      this.products = productsFromDb
  );
  }

  deleteProduct(product: any) {
    const index = this.products.indexOf(product);
    this.products.splice(index,1);
    this._toastService.success(this.translateService.instant('toast.deleted'));

    this.http.put("https://webshop08-5abed-default-rtdb.europe-west1.firebasedatabase.app/products.json", this.products).subscribe();

  }

}

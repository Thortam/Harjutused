import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import productsData from 'src/assets/products.json';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  products: any[] = [];
  url = "https://webshop08-5abed-default-rtdb.europe-west1.firebasedatabase.app/products.json";

  constructor(private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>(this.url).subscribe(productsFromDb => 
      this.products = productsFromDb
  );
  }

  addNewProduct(form: NgForm) {
    this.products.push(form.value);
    this.http.put(this.url, this.products).subscribe(() => this.router.navigateByUrl("/admin/halda-tooteid"));
    

    
  }

}
 
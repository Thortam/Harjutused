import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Path } from 'leaflet';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CategoryComponent } from './admin/category/category.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { MaintainProductsComponent } from './admin/maintain-products/maintain-products.component';
import { PageSettingsComponent } from './admin/page-settings/page-settings.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { SingleProductComponent } from './single-product/single-product.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "ostukorv", component: CartComponent},
  {path: "meist", component: AboutUsComponent},
  {path: "toode/:id", component: SingleProductComponent},
  {path: "poed", component: MapComponent},
  {path: "admin", component: AdminHomeComponent},
  {path: "admin/lisa-toode", component: AddProductComponent},
  {path: "admin/muuda-toode/:id", component: EditProductComponent},
  {path: "admin/halda-tooteid", component: MaintainProductsComponent},
  {path: "admin/kategooria", component: CategoryComponent},
  {path: "admin/lehe-seaded", component: PageSettingsComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NimedComponent } from './nimed/nimed.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { MuudaComponent } from './muuda/muuda.component';

@NgModule({
  declarations: [
    AppComponent,
    NimedComponent,
    UsersComponent,
    UserComponent,
    MuudaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

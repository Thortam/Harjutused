import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuudaComponent } from './muuda/muuda.component';
import { NimedComponent } from './nimed/nimed.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: "/nimed", pathMatch: "full" },
  { path: 'nimed', component: NimedComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'muuda/:id', component: MuudaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

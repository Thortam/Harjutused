import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import usersFromFile from "../../assets/users.json"


@Component({
  selector: 'app-muuda',
  templateUrl: './muuda.component.html',
  styleUrls: ['./muuda.component.css']
})
export class MuudaComponent implements OnInit {
  user: any;
  editForm: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id"); // URL-ist alati string
    this.user = usersFromFile.find(element => element.id === Number(id));
    this.editForm = new FormGroup({
      id: new FormControl (this.user.id),
      name: new FormControl (this.user.name),
      username: new FormControl (this.user.username),
      email: new FormControl (this.user.email),
      street: new FormControl (this.user.address.street),
      suite: new FormControl (this.user.address.suite),
      city: new FormControl (this.user.address.city),
      zipcode: new FormControl (this.user.address.zipcode),
      lat: new FormControl (this.user.address.geo.lat),
      lng: new FormControl (this.user.address.geo.lng),
      phone: new FormControl (this.user.phone),
      website: new FormControl (this.user.website),
      companyName: new FormControl (this.user.company.name),
      catchPhrase: new FormControl (this.user.company.catchPhrase),
      bs: new FormControl (this.user.company.bs),
    });
  }

  onSubmit() {

  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import usersFromFile from "../../assets/users.json"

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id"); // URL-ist alati string
    this.user = usersFromFile.find(element => element.id === Number(id));
  }

}

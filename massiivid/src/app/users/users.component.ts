import { Component, OnInit } from '@angular/core';
import usersFromFile from "../../assets/users.json"

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any [] = usersFromFile;
  j2rjekorranumber: any;
  leitud: any;
  summa: any = 0;
  otsitavNimi = "";             // google search --> get unique items in  array javascript
  telefoniNumbriAlgus: any[] = [ ...new Set(usersFromFile.map(element => element.phone.charAt(0)))].sort();
  viimatiKlikitudTelNumAlgus = "0";

  constructor() { }

  ngOnInit(): void {
  }

  filtreeriTelAlgus(telNumAlgus: any) {
    this.viimatiKlikitudTelNumAlgus = telNumAlgus;
    this.users = usersFromFile.filter(element => element.phone.startsWith(telNumAlgus))
  }

  otsi() {
    this.users = usersFromFile.filter(element => 
      element.email.includes(this.otsitavNimi) ||
      element.phone.includes(this.otsitavNimi) ||
      element.name.includes(this.otsitavNimi));
    }

  filtreeri() {
    this.users = this.users.filter(element => element.name.startsWith("C"));
  }

  filtreeri2() {
    this.users = this.users.filter(element => element.address.geo.lat.startsWith("2"));
  }

  sorteeri() {
    this.users.sort((a,b) => a.email.localeCompare(b.email));
  }

  sorteeri2() {
    this.users.sort((a,b) => a.phone.localeCompare(b.phone));
  }

  kustuta(user: any) {
    const index = this.users.indexOf(user);
    this.users.splice(index,1);
  }

  indexOfFunktsioon(user: any) {
    this.j2rjekorranumber = this.users.indexOf(user);
  }
  tyhjenda() {
    this.users = [];
  }

  popFunktsioon() {
    this.users.pop();
  }

  spliceFunktsioon() {
    this.users.splice(3);
  }
  kustutaAlgusest() {
    this.users.splice(2,1);
  }

  leia() {
    this.leitud = this.users.find(element => element.email.includes("@"));
  }

  arvutaSumma() {
    this.summa = 0;
    this.users.forEach(element => this.summa = this.summa + element.username.length);
  }

  mapFunktsioon() {
    this.users = this.users.map(element => {return {...element, name: "TEST-" + element.name}});
  }

  mapFunktsioon2() {                                                 // Math.ceil ümardab üles    Math.floor alla
    this.users = this.users.map(element => {return {...element, age: Math.ceil (Math.random() * 100)}});
  }

}

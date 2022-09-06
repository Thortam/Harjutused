import { Component, OnInit } from '@angular/core';
import nimedFailist from "../../assets/nimed.json"

@Component({
  selector: 'app-nimed',
  templateUrl: './nimed.component.html',
  styleUrls: ['./nimed.component.css']
})
export class NimedComponent implements OnInit {
  nimed = nimedFailist;
  j2rjekorranumber: any;
  leitud: any;
  summa: any = 0;
  otsitavNimi = "";

  constructor() { }

  ngOnInit(): void {
  }

  otsi() {
  this.nimed = nimedFailist.filter(element => element.includes(this.otsitavNimi));
  }

  arvutaSumma() {
    this.nimed.forEach(element => this.summa = this.summa + element.length);
  }

  leia() {                      // "Nimi"            true
    this.leitud = this.nimed.find(element => element.includes("aa"));
  }

  popFunktsioon() {
    this.nimed.pop(); //kustutab lõpust ühe ära
  }

  shiftFunktsioon() {
    this.nimed.shift(); //kustutab algusest ühe ära
  }

  unshiftFunktsioon() {
    this.nimed.unshift("Test"); //lisab algusesse ühe juurde
  }

  pushFunktsioon() {
    this.nimed.push("Test"); //lisab lõppu ühe juurde
  }

  spliceFunktsioon() {
    this.nimed.splice(5); // kustutab alates sellest numbrist kõik ära
  }

  kustutaAlgusest() {
    this.nimed.splice(5,1); // kustutab alates sellest numbrist ühe
  }

  kustuta(nimi: any) {
    const index = this.nimed.indexOf(nimi);
    this.nimed.splice(index,1);
  }

  tyhjenda() {
    this.nimed = [];
    // this.nimed.splice(0)
  }

  indexOfFunktsioon(nimi: any) {
    this.j2rjekorranumber = this.nimed.indexOf(nimi);
  }

  filterFunktsioon() {
                                  // "Nimi"            true
    this.nimed = this.nimed.filter(element => element.length === 2);
  }

  filterFunktsioon2() {
    this.nimed = this.nimed.filter(element => element.startsWith("S"));
  }

  mapFunktsioon() {
                                // "Nimi"            "TEST- nimi"
    this.nimed = this.nimed.map(element => "TEST-" + element);
  }

  mapFunktsioon2() {
    this.nimed = this.nimed.map(element => element.charAt(1));
  }

  sorteeri() {     // Aaran Aare -> -1/1    positiivse korral vahetab asukohta
    this.nimed.sort((a,b)=> a.localeCompare(b));
  }

  sorteeri2() {
    this.nimed.sort((a,b)=> b.localeCompare(a)); 
  }

  sorteeri3() {                 //6           5
    this.nimed.sort((a,b)=> a.length - b.length); 
  }
  
  sorteeri4() { // sama mis sorteeri3
                                   // 6           5
    this.nimed.sort((a,b)=> -1 * (a.length - b.length)); 
  }

  




  // .pop()   .shift   .unshift() .sort()  .filter()  .map()
  // .push()  .splice()  .find()  .indexOf()  .length()  .forEach()

}

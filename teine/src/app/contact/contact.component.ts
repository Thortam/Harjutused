import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  aadress = "Aadress: Pallasti 34b, 11416 Tallinn";
  telefoninumber = "Telefoninumber: 5566789";
  email = "Email: info@teine.ee";
  onIngliseKeelne = false;

  constructor() { }

  ngOnInit(): void {
  }

  muudaIngliseKeelseks() {
    this.aadress = "Location: Pallasti 34b, 11416 Tallinn";
    this.telefoninumber = "Call us: 5566789";
    this.email = "Email: info@teine.ee";
    this.onIngliseKeelne = true
  }

}


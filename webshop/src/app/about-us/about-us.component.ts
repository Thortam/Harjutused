import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  contactData: any = {telephone: "Telefoninumbrit ei ole", address: "Aadressi ei ole"}; // ei tee ngFor, sest ngFor tehakse []

  constructor() { }

  ngOnInit(): void {
    let contactLS = localStorage.getItem("contact");
    if (contactLS !== null) {
      this.contactData = JSON.parse(contactLS);
    }
  }

}

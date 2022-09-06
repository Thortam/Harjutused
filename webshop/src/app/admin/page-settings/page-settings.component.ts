import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-page-settings',
  templateUrl: './page-settings.component.html',
  styleUrls: ['./page-settings.component.css']
})
export class PageSettingsComponent implements OnInit {
  contactSettingsForm: any;

  constructor() { }

  ngOnInit(): void {
    let contact = {telephone: "", address: ""};
    const contactLS =localStorage.getItem("contact");
    if (contactLS !== null) {
      contact = JSON.parse(contactLS);
    }
    this.contactSettingsForm = new FormGroup(
      {telephone: new FormControl(contact.telephone), address: new FormControl(contact.address)}
      )
  }

  addSettings(form: NgForm) {
    // .push(form.value) <--- [{},{UUS}]
    // key            |    value
    // cartProducts   |   [{},{UUS}] 

    // contact        |   {UUS} 
    localStorage.setItem("contact", JSON.stringify(form.value))

  }

}

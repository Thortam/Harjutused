import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  kontaktAndmed = ""

  constructor() { }

  ngOnInit(): void {
  }

  n2itaKontaktAndmeid(uuedKontaktAndmed: string) {
    this.kontaktAndmed = uuedKontaktAndmed;
  }

}

import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  uudis = "Juhtus selline asi...";
  uudiseSisu = "See on uudise sisu"
  onIngliseKeelne = false;
  ollakseHiiregaT2rniPeal = false;
  algusesse = true;

  constructor() { }

  ngOnInit(): void {
  }

  hiiregaYleMinnes() {
    this.ollakseHiiregaT2rniPeal = true;
  }

  hiirega2raMinnes() {
    this.ollakseHiiregaT2rniPeal = false;
  }

  muudaIngliseKeelseks() {
    this.uudis = "This thing happened..."
    this.uudiseSisu = "This is content of the news"
    this.onIngliseKeelne = true;
  }

  muudaMuukeelseks() {
    this.uudis = "Esto paso..."
    this.uudiseSisu = "Este es el contenido de la noticia."
    this.onIngliseKeelne = false;
  }

  muudaTagasi() {
    this.uudis = "Juhtus selline asi"
    this.uudiseSisu = "See on uudise sisu"
    this.algusesse = true

  }

}
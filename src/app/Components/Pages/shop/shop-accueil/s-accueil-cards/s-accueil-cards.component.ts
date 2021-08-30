import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-s-accueil-cards',
  templateUrl: './s-accueil-cards.component.html',
  styleUrls: ['./s-accueil-cards.component.css']
})
export class SAccueilCardsComponent implements OnInit {
  @Input()
  name!: string;
  @Input()
  img!: string;
  @Input()
  price!: string;
  @Input()
  link!: string;
  constructor() { }

  ngOnInit(): void {
  }

}

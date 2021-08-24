import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-feature-card',
  templateUrl: './home-feature-card.component.html',
  styleUrls: ['./home-feature-card.component.css']
})
export class HomeFeatureCardComponent implements OnInit {

  @Input()
  title!: string;
  @Input()
  img!: string;
  @Input()
  description!: string;
  @Input()
  link!: string;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { CategoryProduct } from 'src/app/Models/Products/category-product';

@Component({
  selector: 'app-s-accueil-filter',
  templateUrl: './s-accueil-filter.component.html',
  styleUrls: ['./s-accueil-filter.component.css']
})
export class SAccueilFilterComponent implements OnInit {
  categories: CategoryProduct[] = [];
  
  constructor(

  ) { }

  ngOnInit(): void {
  }

}

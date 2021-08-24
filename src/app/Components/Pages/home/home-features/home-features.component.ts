import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-features',
  templateUrl: './home-features.component.html',
  styleUrls: ['./home-features.component.css']
})
export class HomeFeaturesComponent implements OnInit {

  features: any = [];

  constructor() { }

  ngOnInit(): void {
    this.features = [
      {
        title: 'E-Shop',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius a ipsum ut efficitur.',
        img: 'assets/img/Coffret-1.jpg',
        link:'/shop'
      },
      {
        title: 'Epicerie',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius a ipsum ut efficitur.',
        img: 'assets/img/Coffret-1.jpg',
        link:'/About'
      },
      {
        title: 'Blog',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius a ipsum ut efficitur.',
        img: 'assets/img/Coffret-1.jpg',
        link:'/Blog'
      }


    ]
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarItem: Array<any>=[
    {name:'Home', link:'./home'},
    {name:'About', link:'./about'},
    {name:'Shop', link:'./shop'},
    {name:'Blog', link:'./blog'},
    { name: 'Contact', link: './contact' },
    { name: 'account', link: './account' },
    {name: 'panier', link:'./cart'}

  ]

  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }


  constructor() { }

  ngOnInit(): void {
  }

}

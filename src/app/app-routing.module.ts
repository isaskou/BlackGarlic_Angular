import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/layout/main/main.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { DetailProductComponent } from './Components/Pages/shop/detailProduct/detailProduct.component';
import { ShopComponent } from './Components/Pages/shop/shop.component';

const routes: Routes = [

  { path: '', redirectTo: 'main/home', pathMatch: 'full' },
  { path: 'main', redirectTo: 'main/home', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'detailsProduct/:id', component: DetailProductComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

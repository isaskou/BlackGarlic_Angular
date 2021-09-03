import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/layout/main/main.component';
import { AboutComponent } from './Components/Pages/about/about.component';
import { AccountComponent } from './Components/Pages/account/account.component';
import { BlogComponent } from './Components/Pages/blog/blog.component';
import { ContactComponent } from './Components/Pages/contact/contact.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { DetailProductComponent } from './Components/Pages/shop/detailProduct/detailProduct.component';
import { ShopComponent } from './Components/Pages/shop/shop.component';

const routes: Routes = [

  { path: '', redirectTo: 'main/home', pathMatch: 'full' },
  { path: 'main', redirectTo: 'main/home', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent, children: [
      { path: 'home', component: HomeComponent },
      {path:'about', component: AboutComponent},
      { path: 'shop', component: ShopComponent },
      { path: 'shop/:id', component: DetailProductComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'contact', component: ContactComponent },
      {path:'account', component: AccountComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

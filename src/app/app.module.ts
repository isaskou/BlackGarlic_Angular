import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { HomeBannerComponent } from './Components/Pages/home/home-banner/home-banner.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { NavbarComponent } from './Components/layout/navbar/navbar.component';
import { FooterComponent } from './Components/layout/footer/footer.component';
import { HomeFeatureCardComponent } from './Components/Pages/home/home-feature-card/home-feature-card.component';
import { HomeFeaturesComponent } from './Components/Pages/home/home-features/home-features.component';
import { ShopComponent } from './Components/Pages/shop/shop.component';
import { DetailProductComponent } from './Components/Pages/shop/detailProduct/detailProduct.component';
import { ShopAccueilComponent } from './Components/Pages/shop/shop-accueil/shop-accueil.component';
import { SAccueilTitleComponent } from './Components/Pages/shop/shop-accueil/s-accueil-title/s-accueil-title.component';
import { SAccueilBannerComponent } from './Components/Pages/shop/shop-accueil/s-accueil-banner/s-accueil-banner.component';
import { MainComponent } from './Components/layout/main/main.component';
import { SAccueilFeatureComponent } from './Components/Pages/shop/shop-accueil/s-accueil-feature/s-accueil-feature.component';
import { SAccueilFilterComponent } from './Components/Pages/shop/shop-accueil/s-accueil-filter/s-accueil-filter.component';
import { DProductTitleComponent } from './Components/Pages/shop/detailProduct/d-product-title/d-product-title.component';
import { DProductDetailComponent } from './Components/Pages/shop/detailProduct/d-product-detail/d-product-detail.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AboutComponent } from './Components/Pages/about/about.component';
import { BlogComponent } from './Components/Pages/blog/blog.component';
import { ContactComponent } from './Components/Pages/contact/contact.component';
import { PanierComponent } from './Components/Caddie/panier/panier.component';
import { AccountComponent } from './Components/Pages/account/account.component';
import { TokenService } from './Services/Tools/token.service';

export function tokenGetter() {
  return sessionStorage.getItem("jwt");
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeBannerComponent,
    HomeFeatureCardComponent,
    HomeFeaturesComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    ShopComponent,
    DetailProductComponent,
    ShopAccueilComponent,
    SAccueilTitleComponent,
    SAccueilBannerComponent,
    MainComponent,
    SAccueilFeatureComponent,
    SAccueilFilterComponent,
    DProductTitleComponent,
    DProductDetailComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    PanierComponent,
    AccountComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:4200"],
        disallowedRoutes:[]
      }
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

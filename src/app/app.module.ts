import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopAccueilComponent } from './Components/Pages/shop/shop-accueil/shop-accueil.component';
import { SAccueilTitleComponent } from './Components/Pages/shop/shop-accueil/s-accueil-title/s-accueil-title.component';
import { SAccueilBannerComponent } from './Components/Pages/shop/shop-accueil/s-accueil-banner/s-accueil-banner.component';
import { MainComponent } from './Components/layout/main/main.component';
import { SAccueilFeatureComponent } from './Components/Pages/shop/shop-accueil/s-accueil-feature/s-accueil-feature.component';


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
    SAccueilFeatureComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

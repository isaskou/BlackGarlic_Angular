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
import { ShopBannerComponent } from './Components/Pages/shop/shop-banner/shop-banner.component';
import { ProductsSectionComponent } from './Components/Pages/shop/products-section/products-section.component';


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
    ShopBannerComponent,
    ProductsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

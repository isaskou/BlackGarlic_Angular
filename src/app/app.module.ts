import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { HomeBannerComponent } from './Components/Pages/home/home-banner/home-banner.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { NavbarComponent } from './Components/layout/navbar/navbar.component';
import { FooterComponent } from './Components/layout/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeBannerComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

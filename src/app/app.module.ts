import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HowItWorksAndFeaturesComponent } from './Components/how-it-works-and-features/how-it-works-and-features.component';
import { PricingAndPlansComponent } from './Components/pricing-and-plans/pricing-and-plans.component';
import { NumberSearchComponent } from './Components/number-search/number-search.component';
import { PaymentComponent } from './Components/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HowItWorksAndFeaturesComponent,
    PricingAndPlansComponent,
    NumberSearchComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

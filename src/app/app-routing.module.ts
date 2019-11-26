import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { HowItWorksAndFeaturesComponent } from './Components/how-it-works-and-features/how-it-works-and-features.component';
import { PricingAndPlansComponent } from './Components/pricing-and-plans/pricing-and-plans.component';
import { NumberSearchComponent } from './Components/number-search/number-search.component';
import { PaymentComponent } from './Components/payment/payment.component';




const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'HowItWorksAndFeatures', component: HowItWorksAndFeaturesComponent },
  { path: 'PricingAndPlans', component: PricingAndPlansComponent },
  { path: 'NumberSearch', component: NumberSearchComponent },
  { path: 'Payment', component: PaymentComponent },
  { path: '**', redirectTo: 'Home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

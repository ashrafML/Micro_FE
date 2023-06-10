import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'LandingPageComponent', pathMatch: 'full' },
{
        path: 'home',
        component: HomeComponent
      },
      { path: 'landing-pagey', component: LandingPageComponent },
  
//   {
//   path: '**',
//     component: LandingPageComponent
//   },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
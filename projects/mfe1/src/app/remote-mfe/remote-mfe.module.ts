import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MfeHomeComponent } from './mfe-home/mfe-home.component';
import { Route, RouterModule } from '@angular/router';

export const remoteRoutes: Route[] = [
  { path: '', component: MfeHomeComponent },   // Add route
];
@NgModule({
  declarations: [
    MfeHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(remoteRoutes)    // forChild
  ]
})
export class RemoteMfeModule { }
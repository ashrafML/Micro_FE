import { getManifest } from '@angular-architects/module-federation';
import { Component, OnInit } from '@angular/core';
import { CustomManifest, CustomRemoteConfig } from '../model/mf.model';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  remotes: CustomRemoteConfig[] = [];
  constructor() {
    
    // const manifest = getManifest<CustomManifest>();
    // console.log(manifest)
   }
  ngOnInit(): void {
    const manifest = getManifest<CustomManifest>();
    console.log(manifest)
    this.remotes = Object.values(manifest).filter((v) => v.viaRoute === true);
  }
}
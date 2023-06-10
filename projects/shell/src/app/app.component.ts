import { Component } from '@angular/core';
import { CustomManifest, CustomRemoteConfig } from './model/mf.model';
import { getManifest } from '@angular-architects/module-federation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shell';
  remotes: CustomRemoteConfig[] = [];
  constructor() {
    
    const manifest = getManifest<CustomManifest>();
    console.log(manifest)
    this.remotes = Object.values(manifest).filter((v) => v.viaRoute === true);
   }
  ngOnInit(): void {
  
  }
}

import { Component } from '@angular/core';
import { ShareLibService } from 'share-lib';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Textvlue:any=""
  constructor(private readonly shareLib: ShareLibService) {}
  sendData() {
    this.shareLib.SetData(this.Textvlue);
  }
}

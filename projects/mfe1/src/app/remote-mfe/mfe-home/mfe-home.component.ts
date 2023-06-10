import { Component, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { ShareLibService } from 'share-lib';

@Component({
  selector: 'app-mfe-home',
  templateUrl: './mfe-home.component.html',
  styleUrls: ['./mfe-home.component.css']
})
export class MfeHomeComponent {
  Value$:Observable<string> | undefined;
  constructor(@Optional() private readonly shareLb?: ShareLibService) {
    if (!shareLb) {
      this.shareLb= new ShareLibService();
    }
  }
  ngOnInit(): void {
    this.Value$ = this.shareLb?.value;  // subscribe to data
  }
}

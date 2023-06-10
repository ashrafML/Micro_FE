import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()                     // Remove providerIn:root
export class ShareLibService {
 constructor() {}
 private _value = new BehaviorSubject('');
 readonly value = this._value.asObservable();
 
 SetData(value: string) {
    this._value.next(value);   
 }
}
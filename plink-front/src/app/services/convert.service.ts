import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  private subject = new Subject<any>();
  public changeConvert = this.subject.asObservable();

  constructor() {}

  public changeMessage(msg: string): void {
    this.subject.next(msg);
  }
}

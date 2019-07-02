import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  tockenizedReq: any;

  constructor() { }

  intercept(req, next) {
    this.tockenizedReq = req.clone({
      setHeaders: {
        'X-RapidAPI-Host': `bravenewcoin-v1.p.rapidapi.com`,
        'X-RapidAPI-Key': `dfc413c838msh6b2e96f25657401p1bebc3jsn50b3346a801c`
      }
    });
    return next.handle(this.tockenizedReq);
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatTableModule } from '@angular/material';
import { ListComponent } from './components/list/list.component';
import { CoinService } from './services/coin.service';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { CoinComponent } from './components/coin/coin.component';
import { ConvertComponent } from './components/convert/convert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { NgxCleaveDirectiveModule } from 'ngx-cleave-directive';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListComponent,
    CoinComponent,
    ConvertComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
    NgxCleaveDirectiveModule,
    NgxMaskModule.forRoot({}),
    InfiniteScrollModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })

  ],
  providers: [
    CoinService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

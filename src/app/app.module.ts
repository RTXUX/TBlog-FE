import {BrowserModule} from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyNavComponent} from './my-nav/my-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatRippleModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {MyDashboardComponent} from './my-dashboard/my-dashboard.component';
import {HomeComponent} from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {ArticleComponent} from './article/article.component';
import {LoginComponent} from './login/login.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";
import {AppService} from "./app.service";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent}

]

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  constructor(private app: AppService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (this.app.isAuthenticated()) {
      let xhr = req.clone({
        headers: req.headers.set('Authorization', this.app.authorization)
      });
      return next.handle(xhr);
    } else {
      return next.handle(req);
    }


  }
}

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyDashboardComponent,
    HomeComponent,
    ArticleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [AppService, {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}




import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AuthService } from 'src/services/auth.service';
import { CartService } from 'src/services/cart.service';
import { ProdutoService } from 'src/services/domain/produto.service';
import { StorageService } from 'src/services/storage.service';
import { AuthInterceptor, AuthInterceptorProvider } from './../interceptors/auth-interceptor';
import { ErrorInterceptorProvider } from './../interceptors/error-interceptor';
import { CategoriaService } from './../services/domain/categoria.service';
import { ClienteService } from './../services/domain/cliente.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    CartService,
    AuthService,
    SplashScreen,
    StorageService,
    ProdutoService,
    ClienteService,
    AuthInterceptor,
    CategoriaService,
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

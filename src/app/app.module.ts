import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { OrderComponent } from './components/order/order.component';
import { OrderMovieComponent } from './components/order-movie/order-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DetailComponent,
    HomeComponent,
    MovieComponent,
    OrderComponent,
    OrderMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

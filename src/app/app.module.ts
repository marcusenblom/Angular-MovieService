import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from "@angular/router/testing";
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { OrderComponent } from './components/order/order.component';
import { OrderMovieComponent } from './components/order-movie/order-movie.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { AdminOrderComponent } from './components/admin-order/admin-order.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DetailComponent,
    HomeComponent,
    MovieComponent,
    OrderComponent,
    OrderMovieComponent,
    OrderFormComponent,
    AdminOrderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterTestingModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

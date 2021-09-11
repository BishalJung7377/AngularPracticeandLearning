import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsComponent } from './users/forms/forms.component';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ScrolltopComponent } from './scrolltop/scrolltop.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button"
import {MatSliderModule} from "@angular/material/slider";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
import {HttpClientModule} from "@angular/common/http"


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    FormsComponent,
    NavbarComponent,
    FooterComponent,
    ScrolltopComponent,
    HomeComponent,
    routingcomponents,
    PagenotfoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

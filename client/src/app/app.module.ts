import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarTopComponent,
    SidenavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

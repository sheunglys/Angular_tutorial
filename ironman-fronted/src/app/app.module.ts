import { IronmanService } from './ironman.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IronmanComponent } from './ironman/ironman.component';
import { IronmanListComponent } from './ironman-list/ironman-list.component';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    IronmanComponent,
    IronmanListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // HttpClientModule 要放在 BrowserModule 後面
  ],
  providers: [IronmanService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListPageComponent,
    CardPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

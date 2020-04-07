import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {AddressComponent} from './pages/address/address.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TemplateModule} from './template/template.module';
import {AppRoutingModule} from './app.routing.module';
import {MaterialModule} from './modules/material.module';
import {PagesModule} from './pages/pages.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PagesModule,
    TemplateModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
}

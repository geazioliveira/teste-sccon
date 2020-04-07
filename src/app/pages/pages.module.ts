import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddressComponent} from './address/address.component';
import {HomeComponent} from './home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {MaterialModule} from '../modules/material.module';
import {AddressModule} from './address/address.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AddressModule
  ]
})
export class PagesModule {
}

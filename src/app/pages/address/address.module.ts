import {NgModule} from '@angular/core';
import {AddressComponent} from './address.component';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../modules/material.module';
import {SearchComponent} from './search/search.component';
import {ListComponent} from './list/list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DbService} from '../../services/db.service';
import {DataService} from '../../services/data.service';
import {IConfig, NgxMaskModule} from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AddressComponent,
    SearchComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(options)
  ],
  exports: [
    AddressComponent
  ],
  providers: [
    DbService,
    DataService
  ]
})
export class AddressModule {

}

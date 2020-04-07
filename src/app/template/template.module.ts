import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';
import {RouterModule} from '@angular/router';
import {DirectivesModule} from '../directives/directives.module';
import {MatMenuModule} from '@angular/material/menu';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatTabsModule} from '@angular/material/tabs';
import {MaterialModule} from '../modules/material.module';
import { CustomLoadingComponent } from './custom-loading/custom-loading.component';


@NgModule({
  declarations: [HeaderComponent, MenuComponent, CustomLoadingComponent],
  exports: [
    HeaderComponent,
    CustomLoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DirectivesModule,
    MaterialModule
  ]
})
export class TemplateModule {
}

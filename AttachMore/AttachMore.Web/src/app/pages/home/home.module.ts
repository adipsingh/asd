import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmSharedModule } from '../../shared/am-shared.module';
import { HomeRoutingModule, HOME_COMPONENTS } from './home-routing.module';

@NgModule({
  declarations: [HOME_COMPONENTS],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AmSharedModule
  ]
})
export class HomeModule { }

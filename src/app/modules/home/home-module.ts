import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';


@NgModule({
  declarations: [], // Solo van componentes, directivas y pipes
  imports: [ // Solo se importan modulos
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

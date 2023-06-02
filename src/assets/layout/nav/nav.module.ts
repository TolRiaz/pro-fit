import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';

const COMPONENT_LIST = [
  NavComponent,
]

@NgModule({
  declarations: COMPONENT_LIST,
  imports: [
    CommonModule
  ],
  exports: COMPONENT_LIST
})
export class NavModule { }

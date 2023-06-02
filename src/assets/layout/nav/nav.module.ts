import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { NavItemComponent } from './nav-item/nav-item.component';

const COMPONENT_LIST = [
  NavComponent,
  NavItemComponent
]

@NgModule({
  declarations: COMPONENT_LIST,
  imports: [
    CommonModule
  ],
  exports: COMPONENT_LIST
})
export class NavModule { }

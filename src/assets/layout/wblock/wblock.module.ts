import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WblockComponent } from './wblock.component';

const COMPONENT_LIST = [
  WblockComponent,
]

@NgModule({
  declarations: COMPONENT_LIST,
  imports: [
    CommonModule
  ],
  exports: COMPONENT_LIST,
})
export class WblockModule { }

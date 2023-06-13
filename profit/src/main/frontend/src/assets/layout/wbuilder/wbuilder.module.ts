import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WbuilderComponent } from './wbuilder.component';

const COMPONENT_LIST = [
  WbuilderComponent,
]

@NgModule({
  declarations: COMPONENT_LIST,
  imports: [
    CommonModule,
  ],
  exports: COMPONENT_LIST,
})
export class WbuilderModule {
}

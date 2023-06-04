import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebBuilderComponent } from './web-builder.component';
import { WbuilderModule } from 'src/assets/layout/wbuilder/wbuilder.module';

@NgModule({
  declarations: [
    WebBuilderComponent
  ],
  imports: [
    CommonModule,
    WbuilderModule
  ]
})
export class WebBuilderModule { }

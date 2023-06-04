import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebBuilderComponent } from './web-builder.component';
import { WblockModule } from 'src/assets/layout/wblock/wblock.module';

@NgModule({
  declarations: [
    WebBuilderComponent
  ],
  imports: [
    CommonModule,
    WblockModule
  ]
})
export class WebBuilderModule { }

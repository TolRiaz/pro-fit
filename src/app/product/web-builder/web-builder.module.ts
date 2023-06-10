import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebBuilderRoutingModule } from './web-builder-routing.module';
import { WebBuilderComponent } from './web-builder.component';


@NgModule({
  declarations: [WebBuilderComponent],
  imports: [
    CommonModule,
    WebBuilderRoutingModule
  ]
})
export class WebBuilderModule { }

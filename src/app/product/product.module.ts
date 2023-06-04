import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { WebBuilderModule } from './web-builder/web-builder.module';


@NgModule({
  declarations: [
    ProductComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    WebBuilderModule
  ]
})
export class ProductModule { }
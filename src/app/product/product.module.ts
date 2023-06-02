import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { WebBuilderComponent } from './web-builder/web-builder.component';


@NgModule({
  declarations: [
    ProductComponent,
    WebBuilderComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
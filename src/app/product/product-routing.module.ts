import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { WebBuilderComponent } from './web-builder/web-builder.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },

  {
    path: 'web-builder',
    component: WebBuilderComponent
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

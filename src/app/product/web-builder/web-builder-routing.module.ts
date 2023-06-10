import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebBuilderComponent } from './web-builder.component';

const routes: Routes = [
  {
    path: '',
    component: WebBuilderComponent
  },

  {
    path: 'category',
    loadChildren: () => import ('./category/category.module')
      .then ( c => c.CategoryModule )
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebBuilderRoutingModule { }

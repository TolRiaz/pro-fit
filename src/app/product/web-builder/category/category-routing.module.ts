import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WbuilderComponent } from 'src/assets/layout/wbuilder/wbuilder.component';
import Blank from './blank'
// import { CategoryComponent } from './category.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: CategoryComponent
  // },

  {
    path: 'blank',
    data: Blank,
    component: WbuilderComponent
  },

  {
    path: 'demo',
    data: { type: 'demo' },
    component: WbuilderComponent
  },

  { path: '**', redirectTo: '/product/web-builder' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }

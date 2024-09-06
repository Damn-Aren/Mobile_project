import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCurDocenPage } from './list-cur-docen.page';

const routes: Routes = [
  {
    path: '',
    component: ListCurDocenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCurDocenPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCurAlumnPage } from './list-cur-alumn.page';

const routes: Routes = [
  {
    path: '',
    component: ListCurAlumnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCurAlumnPageRoutingModule {}

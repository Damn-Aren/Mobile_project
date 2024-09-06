import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LisAlumPage } from './lis-alum.page';

const routes: Routes = [
  {
    path: '',
    component: LisAlumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LisAlumPageRoutingModule {}

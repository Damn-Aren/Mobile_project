import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudalumnoPage } from './crudalumno.page';

const routes: Routes = [
  {
    path: '',
    component: CrudalumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudalumnoPageRoutingModule {}

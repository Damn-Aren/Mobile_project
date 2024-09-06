import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeccPage } from './secc.page';

const routes: Routes = [
  {
    path: '',
    component: SeccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeccPageRoutingModule {}

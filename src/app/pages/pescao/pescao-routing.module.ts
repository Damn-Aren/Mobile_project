import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PescaoPage } from './pescao.page';

const routes: Routes = [
  {
    path: '',
    component: PescaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PescaoPageRoutingModule {}

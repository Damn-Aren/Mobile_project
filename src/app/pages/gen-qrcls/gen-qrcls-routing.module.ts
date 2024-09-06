import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenQRClsPage } from './gen-qrcls.page';

const routes: Routes = [
  {
    path: '',
    component: GenQRClsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenQRClsPageRoutingModule {}

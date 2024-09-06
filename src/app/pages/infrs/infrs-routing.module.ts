import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfrsPage } from './infrs.page';

const routes: Routes = [
  {
    path: '',
    component: InfrsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfrsPageRoutingModule {}

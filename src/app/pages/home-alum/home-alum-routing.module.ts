import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeAlumPage } from './home-alum.page';

const routes: Routes = [
  {
    path: '',
    component: HomeAlumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeAlumPageRoutingModule {}

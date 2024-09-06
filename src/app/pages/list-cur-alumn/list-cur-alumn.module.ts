import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCurAlumnPageRoutingModule } from './list-cur-alumn-routing.module';

import { ListCurAlumnPage } from './list-cur-alumn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCurAlumnPageRoutingModule
  ],
  declarations: [ListCurAlumnPage]
})
export class ListCurAlumnPageModule {}

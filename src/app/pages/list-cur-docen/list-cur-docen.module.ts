import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCurDocenPageRoutingModule } from './list-cur-docen-routing.module';

import { ListCurDocenPage } from './list-cur-docen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCurDocenPageRoutingModule
  ],
  declarations: [ListCurDocenPage]
})
export class ListCurDocenPageModule {}

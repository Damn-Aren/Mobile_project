import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PescaoPageRoutingModule } from './pescao-routing.module';

import { PescaoPage } from './pescao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PescaoPageRoutingModule
  ],
  declarations: [PescaoPage]
})
export class PescaoPageModule {}

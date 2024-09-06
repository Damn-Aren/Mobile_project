import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeccPageRoutingModule } from './secc-routing.module';

import { SeccPage } from './secc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeccPageRoutingModule
  ],
  declarations: [SeccPage]
})
export class SeccPageModule {}

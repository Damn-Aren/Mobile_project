import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenQRClsPageRoutingModule } from './gen-qrcls-routing.module';

import { GenQRClsPage } from './gen-qrcls.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenQRClsPageRoutingModule
  ],
  declarations: [GenQRClsPage]
})
export class GenQRClsPageModule {}

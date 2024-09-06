import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LisAlumPageRoutingModule } from './lis-alum-routing.module';

import { LisAlumPage } from './lis-alum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LisAlumPageRoutingModule
  ],
  declarations: [LisAlumPage]
})
export class LisAlumPageModule {}

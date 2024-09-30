import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudalumnoPageRoutingModule } from './crudalumno-routing.module';

import { CrudalumnoPage } from './crudalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudalumnoPageRoutingModule
  ],
  declarations: [CrudalumnoPage]
})
export class CrudalumnoPageModule {}

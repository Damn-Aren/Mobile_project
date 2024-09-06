import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfrsPageRoutingModule } from './infrs-routing.module';

import { InfrsPage } from './infrs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfrsPageRoutingModule
  ],
  declarations: [InfrsPage]
})
export class InfrsPageModule {}

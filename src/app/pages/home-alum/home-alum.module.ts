import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeAlumPageRoutingModule } from './home-alum-routing.module';

import { HomeAlumPage } from './home-alum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeAlumPageRoutingModule
  ],
  declarations: [HomeAlumPage]
})
export class HomeAlumPageModule {}

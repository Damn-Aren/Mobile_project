import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-infrs',
  templateUrl: './infrs.page.html',
  styleUrls: ['./infrs.page.scss'],
})
export class InfrsPage implements OnInit {

  constructor(private navCtrl:NavController) {}

  ngOnInit() {
  }

  Volver(){
    this.navCtrl.navigateRoot(['/home']);
  }
  
}

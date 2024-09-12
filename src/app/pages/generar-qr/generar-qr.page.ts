import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQrPage implements OnInit {

  constructor(private navCtrl:NavController) {}

  ngOnInit() {
  }

  Lista(){
    this.navCtrl.navigateForward(['lis-alum'])
  }

}

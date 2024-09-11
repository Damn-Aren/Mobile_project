import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-escanear-qr',
  templateUrl: './escanear-qr.page.html',
  styleUrls: ['./escanear-qr.page.scss'],
})
export class EscanearQrPage implements OnInit {

  constructor(private navCtrl:NavController) {}

  ngOnInit() {
  }

  confir(){
    this.navCtrl.navigateForward(['presidente'])
  }

  splash(){
    this.navCtrl.navigateRoot(['/home-alum']);
  }

}

import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-gen-qrcls',
  templateUrl: './gen-qrcls.page.html',
  styleUrls: ['./gen-qrcls.page.scss'],
})
export class GenQRClsPage implements OnInit {

  constructor(private navCtrl:NavController) {}


  ngOnInit() {
  }

  LeerQR(){
    this.navCtrl.navigateForward(['generar-qr'])
  }
  Volver(){
    this.navCtrl.navigateRoot(['/home']);
  }

}

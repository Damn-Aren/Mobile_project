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
    this.valorQR=JSON.stringify(this.valorQRJSON)
  }

  valorQR:string=''
  valorQRJSON={
    codigocurso:'0001',
    codigoprofesor:'0005',
    fecha:'10/10/2005 11:30',
  }
  Lista(){
    this.navCtrl.navigateForward(['lis-alum'])
  }
  Volver(){
  this.navCtrl.navigateRoot(['/home']);
}
}
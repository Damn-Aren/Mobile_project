import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQrPage implements OnInit {
  tiempoRestante: number = 120;
  progreso: number = 1;
  tiempoTexto: string = '02:00';

  constructor(private navCtrl:NavController) {}

  ngOnInit() {
    this.valorQR=JSON.stringify(this.valorQRJSON)
    this.iniciarTemporizador();
  }

  valorQR:string=''
  valorQRJSON={
    codigocurso:'0001',
    codigoprofesor:'0005',
    fecha:'10/10/2005 11:30',
  }
  Lista(){
    this.navCtrl.navigateForward(['espera'])
  }
  Volver(){
  this.navCtrl.navigateRoot(['/home']);
}

iniciarTemporizador() {
  const intervalo = setInterval(() => {
    if (this.tiempoRestante > 0) {
      this.tiempoRestante--;
      this.actualizarTiempoTexto();
      this.actualizarProgreso();
    } else {
      clearInterval(intervalo); // Detiene el temporizador cuando llega a 0
    }
  }, 1000); // Actualiza cada segundo (1000 ms)
}

actualizarTiempoTexto() {
  const minutos = Math.floor(this.tiempoRestante / 60);
  const segundos = this.tiempoRestante % 60;
  this.tiempoTexto = 
    (minutos < 10 ? '0' + minutos : minutos) + 
    ':' + 
    (segundos < 10 ? '0' + segundos : segundos);
}

actualizarProgreso() {
  this.progreso = this.tiempoRestante / 120;
}
}
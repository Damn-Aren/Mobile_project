import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQrPage implements OnInit {
  clases: any[] = [];
  claseSeleccionada: any;
  tiempoRestante: number = 120;
  progreso: number = 1;
  tiempoTexto: string = '02:00';
  valorQR: string = '';

  constructor(private navCtrl:NavController, private db: AngularFireDatabase) {}

  ngOnInit() {
    this.claseSeleccionada = {
      id_clase: '4444',
      fecha: '11/09/2024',
      dia: 'lunes'
    };
    this.cargarClases();
    this.iniciarTemporizador();
    this.cargarClases();
    this.generarQR();
  }

  cargarClases() {
    this.db.list('/clases/MMBqzIx4vRYBJSMCp9vT', ref => ref.orderByChild('status').equalTo(false))
      .valueChanges()
      .subscribe((data: any[]) => {
        this.clases = data;
      });
  }

  seleccionarClase(clase: any) {
    this.claseSeleccionada = clase;
  }

  generarQR() {
    if (!this.claseSeleccionada) {
      alert('Por favor, selecciona una clase.');
      return;
    }

    this.valorQR = JSON.stringify({
      id_clase: this.claseSeleccionada.id_clase,
      fecha: this.claseSeleccionada.fecha,
      dia: this.claseSeleccionada.dia
    });

    console.log('QR generado:', this.valorQR);
    this.iniciarTemporizador();
  }

  iniciarTemporizador() {
    const intervalo = setInterval(() => {
      if (this.tiempoRestante > 0) {
        this.tiempoRestante--;
        this.actualizarTiempoTexto();
        this.actualizarProgreso();
      } else {
        clearInterval(intervalo);
      }
    }, 1000);
  }

  actualizarTiempoTexto() {
    const minutos = Math.floor(this.tiempoRestante / 60);
    const segundos = this.tiempoRestante % 60;
    this.tiempoTexto =
      (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos);
  }

  actualizarProgreso() {
    this.progreso = this.tiempoRestante / 120;
  }
  Lista(){
    this.navCtrl.navigateForward(['espera'])
  }
  Volver(){
  this.navCtrl.navigateRoot(['/home']);
}
}
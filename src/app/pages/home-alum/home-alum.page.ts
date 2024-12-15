import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Barcode, BarcodeScanner, LensFacing } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import { DialogService } from 'src/app/servicios/dialog.service';

import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
import { ToastController } from '@ionic/angular';

import { CrudalumnoService } from 'src/app/servicios/crudalumno.service';


@Component({
  selector: 'app-home-alum',
  templateUrl: './home-alum.page.html',
  styleUrls: ['./home-alum.page.scss'],
})
export class HomeAlumPage implements OnInit {
  idAsignatura: string;
  isSupported = false;
  barcodes: any[] = [];
  usuario: any = null; 

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController,
    private dialogService: DialogService,
    private toast: ToastController,
    private crudalumnoService: CrudalumnoService,
    
  ) {}

  ngOnInit(): void {
    const usuarioData = sessionStorage.getItem("usuario");
    if (usuarioData) {
      this.usuario = JSON.parse(usuarioData);
    }
  
    this.checkScannerSupport();
  }
  
  async checkScannerSupport() {
    try {
      const result = await BarcodeScanner.isSupported();
      this.isSupported = result?.supported || false; 
    } catch (error) {
      console.error('Error verificando soporte del escáner:', error);
      this.isSupported = false;  
    }
  }
  
  public async startScan(): Promise<void> {
    try {
      const element = await this.dialogService.showModal({
        component: BarcodeScanningModalComponent,
        cssClass: 'barcode-scanning-modal',
        showBackdrop: false,
        componentProps: {
          formats: [],
          lensFacing: LensFacing.Back,
        },
      });

      element.onDidDismiss().then((result) => {
        const barcode: Barcode | undefined = result.data?.barcode;
        if (barcode) {
          this.barcodes = [barcode];
          this.actualizarAsistencia();
          this.navCtrl.navigateRoot(['/espera']);
        }
      });

    } catch (error) {
      console.error("Error durante el escaneo de código de barras:", error);
      this.mensaje("Error durante el escaneo");
      this.mensaje(error);
    }
  }

  
  actualizarAsistencia(): void {
    if (this.usuario) {
      const alumnoId = this.usuario.id;
      const path = `asignatura01/${this.idAsignatura}/Alumnos`;
  
      this.crudalumnoService.actualizarAsistenciaAlumno(alumnoId, path).then(() => {
        console.log(`Asistencia actualizada para el alumno: ${this.usuario.nombre}`);
        this.mensaje("Asistencia registrada correctamente.");
      }).catch(error => {
        console.error('Error al actualizar la asistencia:', error);
        this.mensaje("Error al actualizar la asistencia.");
      });
    } else {
      console.error('No hay un alumno logueado');
      this.mensaje("No hay un alumno logueado.");
    }
  }
  

  public async scan(): Promise<void> {
    try {
      const element = await this.dialogService.showModal({
        component: BarcodeScanningModalComponent,
        cssClass: 'barcode-scanning-modal',
        showBackdrop: false,
        componentProps: {
          formats: [],
          lensFacing: LensFacing.Back,
        },
      });
  
      element.onDidDismiss().then((result) => {
        const barcode: Barcode | undefined = result.data?.barcode;
        if (barcode) {
          this.barcodes = [barcode];
          this.actualizarAsistencia(); 
        }
      });
  
    } catch (error) {
      console.error("Error durante el escaneo de código de barras:", error);
      this.mensaje("Error durante el escaneo");
      this.mensaje(error);
    }
  }
  

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permiso denegado',
      message: 'Porfavor otorgue acceso a la camara para comenzar a escanear.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async mensaje(texto: any): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: texto,
      buttons: ['OK'],
    });
    await alert.present();
  }

  Cursos() {
    this.navCtrl.navigateForward(['list-cur-alumn']);
  }

  LeerQR() {
    this.navCtrl.navigateForward(['escanear-qr']);
  }

  Volver() {
    this.navCtrl.navigateRoot(['/secc']);
  }
  Espera() {
    this.navCtrl.navigateRoot(['/espera']);
  }

  Irhome(){
    this.navCtrl.navigateRoot(['/home']);
  }
}

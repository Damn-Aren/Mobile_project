import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

import { Barcode, BarcodeScanner,LensFacing } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import { DialogService } from 'src/app/servicios/dialog.service';

import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home-alum',
  templateUrl: './home-alum.page.html',
  styleUrls: ['./home-alum.page.scss'],
})
export class HomeAlumPage implements OnInit {

  isSupported = false;
  barcodes: Barcode[] = [];

  usuario:string=''

  constructor(private navCtrl:NavController,
    private alertController: AlertController,
    private dialogService:DialogService,
    private toast:ToastController
  ) {}

  ngOnInit(): void {
    var x = localStorage.getItem('usuario')
    this.usuario=x ??'',
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
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
        }
      });
  
    } catch (error) {
      console.error("Error durante el escaneo de código de barras:", error);
      this.mensaje("error")
      this.mensaje(error)
    }
  }  
  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    this.barcodes.push(...barcodes);
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

  async mensaje(texto:any): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permiso denegado',
      message: texto,
      buttons: ['OK'],
    });
    await alert.present();
  }

  Cursos(){
    this.navCtrl.navigateForward(['list-cur-alumn'])
  }

  LeerQR(){
    this.navCtrl.navigateForward(['escanear-qr'])
  }
  Volver(){
    this.navCtrl.navigateRoot(['/secc']);
  }
}


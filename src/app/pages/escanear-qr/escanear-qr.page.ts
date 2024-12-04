import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-escanear-qr',
  templateUrl: './escanear-qr.page.html',
  styleUrls: ['./escanear-qr.page.scss'],
})
export class EscanearQrPage implements OnInit {
  isSupported = false;
  barcodes: Barcode[] = [];

  constructor(private navCtrl:NavController,
    private db: AngularFireDatabase,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
  
    try {
      const { barcodes } = await BarcodeScanner.scan();
      if (barcodes.length > 0) {
        const qrData = barcodes[0].rawValue; // Suponiendo que el QR contiene un string como "alumnoId-asignaturaId"
        
        // Aquí dividimos el valor del QR para obtener el alumnoId y asignaturaId
        const [alumnoId, asignaturaId] = qrData.split('-');  // Usamos un guion como delimitador, cámbialo si es necesario
  
        console.log("Datos escaneados:", alumnoId, asignaturaId);
  
        // Ahora construimos la ruta de la base de datos con esos valores
        const path = `asignatura01/${asignaturaId}/Alumnos`;
  
        // Actualizamos la asistencia
        this.db.object(`${path}/${alumnoId}`).update({ asiste: true })
          .then(() => {
            console.log("Asistencia actualizada correctamente.");
          })
          .catch((error) => {
            console.error("Error al actualizar asistencia:", error);
          });
      }
    } catch (error) {
      console.error("Error al escanear el código:", error);
    }
  }
  
  
  
  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  confir(){
    this.navCtrl.navigateForward(['presidente'])
  }

  splash(){
    this.navCtrl.navigateRoot(['/home-alum']);
  }

}

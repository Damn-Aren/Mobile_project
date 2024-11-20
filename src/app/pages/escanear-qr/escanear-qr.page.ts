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
    const { barcodes } = await BarcodeScanner.scan();
    if (barcodes.length > 0) {
      const qrData = JSON.parse(barcodes[0].rawValue);
      /*this.marcarAsistencia(qrData.id_clase);
    }
  }
  async marcarAsistencia(id_clase: string) {
    const rutas = [
      'asignatura01/onr02sLjGnrvyYWmZKC4/Alumnos',
      'asignatura01/UrKySJQflQGmLweDEZsd/Alumnos',
      'asignatura01/uyEBxZvVl5IeWEj8K73s/Alumnos',
    ];
  for (const ruta of rutas) {
    this.db.list(ruta, ref => ref.orderByChild('rut').equalTo(this.rutAlumno))
      .snapshotChanges()
      .subscribe((snapshot: any[]) => {
        if (snapshot.length > 0) {
          const alumnoKey = snapshot[0].key;
          this.db.object(`${ruta}/${alumnoKey}`).update({ asiste: true });
          alert('¡Asistencia marcada correctamente!');
          return;
        }
      });
  }
}*/
    }}
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

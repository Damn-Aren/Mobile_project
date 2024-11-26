import { Component, OnInit,  ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';

import { asignatura01} from 'src/app/model/asignatura';
import { CrudasignaturaService } from 'src/app/servicios/crudasignatura.service';
import type { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-gen-qrcls',
  templateUrl: './gen-qrcls.page.html',
  styleUrls: ['./gen-qrcls.page.scss'],
})

export class GenQRClsPage implements OnInit {

  @ViewChild('modal', { static: true }) modal: IonModal;

  constructor(private navCtrl:NavController, private ca:CrudasignaturaService) {}

  asignatura:asignatura01 = {Nombre_asignatura:''}
  Lista_asignaturas:asignatura01[] = []

  ngOnInit() {
    this.listar()
  }

  listar(){
    this.ca.listarAsignatura().subscribe((data: asignatura01[]) => {
      this.Lista_asignaturas = data;
  });
  }  
  LeerQR(){
    this.navCtrl.navigateForward(['generar-qr'])
    this.modal.dismiss();
  }
  Volver(){
    this.navCtrl.navigateRoot(['/home']);
  }

  closeModal() {
    this.modal.dismiss();
  }
}

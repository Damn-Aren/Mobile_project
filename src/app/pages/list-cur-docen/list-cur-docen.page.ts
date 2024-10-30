import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { asignatura01} from 'src/app/model/asignatura';
import { CrudasignaturaService } from 'src/app/servicios/crudasignatura.service';

@Component({
  selector: 'app-list-cur-docen',
  templateUrl: './list-cur-docen.page.html',
  styleUrls: ['./list-cur-docen.page.scss'],
})
export class ListCurDocenPage implements OnInit {

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

  PorCur(){
    this.navCtrl.navigateForward(['/ver'])
  }

  Volver(){
    this.navCtrl.navigateRoot(['/home']);
  }

}

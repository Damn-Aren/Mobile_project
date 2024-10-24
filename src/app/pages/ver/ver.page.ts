import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

import { Alumno } from 'src/app/model/Alumno';
import { CrudalumnoService } from 'src/app/servicios/crudalumno.service'

@Component({
  selector: 'app-ver',
  templateUrl: './ver.page.html',
  styleUrls: ['./ver.page.scss'],
})
export class VerPage implements OnInit {

  constructor(private navCtrl:NavController, private cp:CrudalumnoService) {}

  ngOnInit() {
    this.listar()
  }
  Volver(){
    this.navCtrl.navigateRoot(['/list-cur-docen']);
  }

  alumno:Alumno = {nombre: '', apellido: '', rut:'', id_seccion: ''}
  nuevo_alumno:Alumno = {id:'', nombre: '', apellido: '', rut:'', id_seccion: ''}
  lista_alumnos:Alumno[] = []
  sw:boolean=false 

  listar(){
    this.cp.listarTodo().subscribe(data=>{
      this.lista_alumnos = data
    })
  }
}
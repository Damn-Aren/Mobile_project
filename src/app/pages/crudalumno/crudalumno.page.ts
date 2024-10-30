import { Component, OnInit } from '@angular/core';

import { Alumno } from 'src/app/model/Alumno';
import { CrudalumnoService } from 'src/app/servicios/crudalumno.service'

@Component({
  selector: 'app-crudalumno',
  templateUrl: './crudalumno.page.html',
  styleUrls: ['./crudalumno.page.scss'],
})
export class CrudalumnoPage implements OnInit {

  constructor(private cp: CrudalumnoService) {}

  alumno:Alumno = {nombre: '', apellido: '', rut:'', id_seccion: '', asiste: false}
  nuevo_alumno:Alumno = {id:'', nombre: '', apellido: '', rut:'', id_seccion: '', asiste: false}
  lista_alumnos:Alumno[] = []
  sw:boolean=false 

  ngOnInit() {
    this.listar()
  }
  listar(){
    this.cp.listarTodo().subscribe(data=>{
      this.lista_alumnos = data
    })
  }
}

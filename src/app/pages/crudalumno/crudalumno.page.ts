import { Component, OnInit } from '@angular/core';

import { Alumno } from 'src/app/model/Alumno';
import { CrudalumnoService } from 'src/app/servicios/crudalumno.service'

@Component({
  selector: 'app-crudalumno',
  templateUrl: './crudalumno.page.html',
  styleUrls: ['./crudalumno.page.scss'],
})
export class CrudalumnoPage implements OnInit {

  constructor(private cp:CrudalumnoService) { }

  alumno:Alumno = {nombre: '', apellido: '', rut:''}
  nuevo_alumno:Alumno = {id:'', nombre: '', apellido: '', rut:''}
  lista_alumnos:Alumno[] = []
  sw:boolean=false 

  ngOnInit() {
    this.listar()
  }
  cancelar(){
    this.sw = false
  }

  actualizar(){
    this.cp.modificar(this.nuevo_alumno).then(() => {
      alert("Actualizado");
      this.sw=false
    }).catch((err) => {
      console.log(err)
    })
  }

  modificar(alumno:Alumno){
    this.nuevo_alumno = alumno
    this.sw=true
  }

  eliminar(id:any){
    this.cp.eliminar(id).then(() => {
      alert("Eliminado");
    }).catch((err) => {
      console.log(err)
  })
}

  listar(){
    this.cp.listarTodo().subscribe(data=>{
      this.lista_alumnos = data
    })
  }
  grabar(){
    this.cp.grabar(this.alumno).then(()=>{
      alert("grabo");
     }).catch((err)=>{
      console.error(err);
    })
  }
}

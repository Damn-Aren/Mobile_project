import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Alumno } from 'src/app/model/Alumno';
import { CrudalumnoService } from 'src/app/servicios/crudalumno.service';
import { ChangeDetectorRef } from '@angular/core';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.page.html',
  styleUrls: ['./ver.page.scss'],
})
export class VerPage implements OnInit {
  criterio: string = '';
  valor: string = '';
  alumnos: Alumno[] = [];

  alumno: Alumno = { nombre: '', apellido: '', rut: '', id_seccion: '', asiste: false };
  nuevo_alumno: Alumno = { id: '', nombre: '', apellido: '', rut: '', id_seccion: '', asiste: false };
  lista_alumnos: Alumno[] = [];
  sw: boolean = false;

  constructor(private navCtrl: NavController, private crudalumnoService: CrudalumnoService, private cdr: ChangeDetectorRef, private zone: NgZone) {}

  ngOnInit() {
    this.listar();
  }

  Volver() {
    this.navCtrl.navigateRoot(['/list-cur-docen']);
  }

  listar() {
    this.crudalumnoService.listarTodo().subscribe(data => {
      this.lista_alumnos = data;
    });
  }

  buscarAlumnos() {
    if (this.criterio && this.valor) {
      this.crudalumnoService.buscarAlumnos(this.criterio, this.valor).subscribe(data => {
        this.lista_alumnos = data;
        console.log('Resultados de la búsqueda:', this.lista_alumnos);
      });
    } else {
      console.warn('Por favor, selecciona un criterio y escribe un valor para buscar.');
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Alumno } from 'src/app/model/Alumno';
import { CrudalumnoService } from 'src/app/servicios/crudalumno.service';
import { ChangeDetectorRef } from '@angular/core';
import { NgZone } from '@angular/core';

import pdfMake from "pdfmake/build/pdfmake"; 
import pdfFonts from "pdfmake/build/vfs_fonts";

import { take } from 'rxjs/operators';


pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-infrs',
  templateUrl: './infrs.page.html',
  styleUrls: ['./infrs.page.scss'],
})
export class InfrsPage implements OnInit {

  ListaSecciones: string[] = []; 

  ObjectPDF : any;
  criterio: string = '';
  valor: string = '';
  alumnos: Alumno[] = [];
  
  alumno: Alumno = { nombre: '', apellido: '', rut: '', id_seccion: '', asiste: false };
  nuevo_alumno: Alumno = { id: '', nombre: '', apellido: '', rut: '', id_seccion: '', asiste: false };
  lista_alumnos: Alumno[] = [];
  sw: boolean = false;

  Lista_secciones: string[] = [];

  constructor(private navCtrl: NavController, private crudalumnoService: CrudalumnoService, private cdr: ChangeDetectorRef, private zone: NgZone) {}

  ngOnInit() {
    this.cargarSecciones();
  }

  Volver(){
    this.navCtrl.navigateRoot(['/home']);
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

  cargarSecciones() {
    this.crudalumnoService.listarTodo().pipe(take(1)).subscribe(data => {
      const secciones = data.map((alumno: any) => alumno.id_seccion);
      this.ListaSecciones = [...new Set(secciones)].sort();
    });
  }

  descargarPDF(idSeccion: string) {
    this.crudalumnoService.listarTodo().pipe(take(1)).subscribe(data => {
      const alumnosSeccion = data.filter((alumno: any) => alumno.id_seccion === idSeccion);
  
      const rows = alumnosSeccion.map((alumno: any) => [
        alumno.id_seccion,
        `${alumno.nombre} ${alumno.apellido}`,
        alumno.rut,
        alumno.asiste ? 'Asiste' : 'No asiste'
      ]);
  
      const dd = {
        content: [
          {
            text: `Informe de Asistencia - Sección ${idSeccion}`,
            style: 'header'
          },
          {
            layout: 'lightHorizontalLines',
            table: {
              headerRows: 1,
              widths: ['*', '*', '*', '*'],
              body: [
                ['Sección', 'Nombre completo', 'Rut', 'Asistencia'],
                ...rows
              ]
            }
          }
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10]
          }
        }
      };
  
      pdfMake.createPdf(dd).download(`Informe_Asistencia_${idSeccion}.pdf`);
    });
  }
  cambiarAsistencia(rut: string) {
    const path = 'asignatura01/onr02sLjGnrvyYWmZKC4/Alumnos';
  
    this.crudalumnoService.buscarAlumnos('rut', rut).pipe(take(1)).subscribe(
      alumnos => {
        if (alumnos.length > 0) {
          const alumno = alumnos[0];
          if (alumno.id) {
            alumno.asiste = true;
            this.crudalumnoService.actualizarAsistenciaAlumno(alumno.id, path)
              .then(() => {
                console.log(`Asistencia actualizada para el alumno con rut: ${rut}`);
              })
              .catch(error => {
                console.error('Error al actualizar asistencia:', error);
              });
          } else {
            console.error('El alumno no tiene un ID válido.');
          }
        } else {
          console.log(`No se encontró un alumno con el rut: ${rut}`);
        }
      },
      error => {
        console.error('Error al buscar el alumno:', error);
      }
    );
  }
}
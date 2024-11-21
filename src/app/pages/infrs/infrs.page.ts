import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Alumno } from 'src/app/model/Alumno';
import { CrudalumnoService } from 'src/app/servicios/crudalumno.service';
import { ChangeDetectorRef } from '@angular/core';
import { NgZone } from '@angular/core';

import pdfMake from "pdfmake/build/pdfmake"; 
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-infrs',
  templateUrl: './infrs.page.html',
  styleUrls: ['./infrs.page.scss'],
})
export class InfrsPage implements OnInit {

  ObjectPDF : any;
  criterio: string = '';
  valor: string = '';
  alumnos: Alumno[] = [];
  
  alumno: Alumno = { nombre: '', apellido: '', rut: '', id_seccion: '', asiste: false };
  nuevo_alumno: Alumno = { id: '', nombre: '', apellido: '', rut: '', id_seccion: '', asiste: false };
  lista_alumnos: Alumno[] = [];
  sw: boolean = false;

  constructor(private navCtrl: NavController, private crudalumnoService: CrudalumnoService, private cdr: ChangeDetectorRef, private zone: NgZone) {}

  ngOnInit() {
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


  descargarPDF() {
    this.crudalumnoService.listarTodo().subscribe(data => {
      this.lista_alumnos = data;

      const rows = this.lista_alumnos.map(alumno => [
        alumno.id_seccion,
        `${alumno.nombre} ${alumno.apellido}`,
        alumno.rut,
        alumno.asiste ? 'Asiste' : 'No asiste'
      ]);
  
      var dd = {
        content: [
          {
            text: 'Informe de Asistencia',
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
  
      this.ObjectPDF = pdfMake.createPdf(dd);
      this.ObjectPDF.download('Informe_Asistencia.pdf');
    });
  }
  
  

  descargarPDF001D() {
    this.crudalumnoService.listarTodo().subscribe(data => {
      const alumnosSeccion001D = data.filter(alumno => alumno.id_seccion === '001D');
  
      const rows = alumnosSeccion001D.map(alumno => [
        alumno.id_seccion,
        `${alumno.nombre} ${alumno.apellido}`,
        alumno.rut,
        alumno.asiste ? 'Asiste' : 'No asiste'
      ]);
 
      var dd = {
        content: [
          {
            text: 'Informe de Asistencia - Sección 001D',
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
  
      this.ObjectPDF = pdfMake.createPdf(dd);
      this.ObjectPDF.download('Informe_Asistencia_001D.pdf');
    });
  }
  
 
  descargarPDF002D() {
    this.crudalumnoService.listarTodo().subscribe(data => {
      const alumnosSeccion002D = data.filter(alumno => alumno.id_seccion === '002D');
  
      const rows = alumnosSeccion002D.map(alumno => [
        alumno.id_seccion,
        `${alumno.nombre} ${alumno.apellido}`,
        alumno.rut,
        alumno.asiste ? 'Asiste' : 'No asiste'
      ]);
 
      var dd = {
        content: [
          {
            text: 'Informe de Asistencia - Sección 001D',
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
  
      this.ObjectPDF = pdfMake.createPdf(dd);
      this.ObjectPDF.download('Informe_Asistencia_002D.pdf');
    });
  }


  descargarPDF003D() {
    this.crudalumnoService.listarTodo().subscribe(data => {
      const alumnosSeccion003D = data.filter(alumno => alumno.id_seccion === '003D');
  
      const rows = alumnosSeccion003D.map(alumno => [
        alumno.id_seccion,
        `${alumno.nombre} ${alumno.apellido}`,
        alumno.rut,
        alumno.asiste ? 'Asiste' : 'No asiste'
      ]);
 
      var dd = {
        content: [
          {
            text: 'Informe de Asistencia - Sección 001D',
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
  
      this.ObjectPDF = pdfMake.createPdf(dd);
      this.ObjectPDF.download('Informe_Asistencia_003D.pdf');
    });
  }

  
  cambiarAsistencia(rut: string) {
    const path = 'asignatura01/onr02sLjGnrvyYWmZKC4/Alumnos';
  
    this.crudalumnoService.buscarAlumnos('rut', rut).subscribe(
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

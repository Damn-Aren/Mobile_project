import { Injectable } from '@angular/core';
import { Alumno } from '../model/Alumno';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudalumnoService {

  constructor(private afs: AngularFirestore) { }

  listarTodo(): Observable<Alumno[]> {
    const alumnos01$ = this.afs.collection<Alumno>('asignatura01/onr02sLjGnrvyYWmZKC4/Alumnos').valueChanges({ idField: 'id' });
    const alumnos02$ = this.afs.collection<Alumno>('asignatura01/UrKySJQflQGmLweDEZsd/Alumnos').valueChanges({ idField: 'id' });
    const alumnos03$ = this.afs.collection<Alumno>('asignatura01/uyEBxZvVl5IeWEj8K73s/Alumnos').valueChanges({ idField: 'id' });

    return new Observable<Alumno[]>((observer) => {
      alumnos01$.subscribe(alumnos01 => {
        alumnos02$.subscribe(alumnos02 => {
          alumnos03$.subscribe(alumnos03 => {
            const todosLosAlumnos = [...alumnos01, ...alumnos02, ...alumnos03];
            observer.next(todosLosAlumnos);
          });
        });
      });
    });
  }
}

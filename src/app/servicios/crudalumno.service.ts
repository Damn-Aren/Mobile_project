import { Injectable } from '@angular/core';

import { Alumno } from '../model/Alumno';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudalumnoService {

  constructor(private afs: AngularFirestore) { }

  listarTodo(): Observable<Alumno[]>{
    return this.afs.collection<Alumno>('asignatura01/onr02sLjGnrvyYWmZKC4/Alumnos')
        .valueChanges({ idField: 'id' });
  }
  
}

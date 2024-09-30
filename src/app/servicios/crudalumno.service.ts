import { Injectable } from '@angular/core';

import { Alumno } from '../model/Alumnos';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudalumnoService {

  constructor(private afs: AngularFirestore) { }

  grabar(alumno:Alumno){
    return this.afs.collection('alumno').add(alumno);
  }
}

import { Injectable } from '@angular/core';

import { Alumno } from '../model/Alumno';
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

  listarTodo(): Observable<Alumno[]>{
    return this.afs.collection<Alumno>('alumno')
        .valueChanges({idField:'id'})

  }
  eliminar(id:any){
    return this.afs.collection('alumno').doc(id).delete();
  }
  modificar(alumno:Alumno){
    return this.afs.collection('alumno').doc(alumno.id)
    .update(alumno);
  }
}

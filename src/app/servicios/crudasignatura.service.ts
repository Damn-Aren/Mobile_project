import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 
import { Observable } from 'rxjs';
import { asignatura01 } from '../model/asignatura'; // Aquí la importación correcta

@Injectable({
  providedIn: 'root'
})
export class CrudasignaturaService {

  constructor(private afs: AngularFirestore) { }

  listarAsignatura(): Observable<asignatura01[]> {
    return this.afs.collection<asignatura01>('asignatura01')
      .valueChanges({ idField: 'id' });
  }
}

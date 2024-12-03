import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, combineLatest, of } from 'rxjs';
import { switchMap, tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClasesService {
  constructor(private afs: AngularFirestore) {}

  obtenerClases(): Observable<any[]> {
    return this.afs.collection('clases').get().pipe(
      switchMap(snapshot => {
        const rutas = snapshot.docs.map(doc => `clases/${doc.id}/clase01`);
        const observables = rutas.map(ruta =>
          this.afs.collection<any>(ruta).valueChanges({ idField: 'id' })
        );
        return combineLatest(observables).pipe(
          map(listasDeClases =>
            listasDeClases.reduce((todas, clases) => [...todas, ...clases], [])
          ),
          map(clases => clases.filter(clase => !clase.activo)),
          catchError(error => {
            console.error('Error al obtener las clases:', error);
            return of([]);
          })
        );
      })
    );
  }
}  
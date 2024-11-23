import { Injectable } from '@angular/core';
import { Alumno } from '../model/Alumno';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CrudalumnoService {

  constructor(private afs: AngularFirestore, private firestore: AngularFirestore) { }


listarTodo(): Observable<Alumno[]> {
  return this.afs.collection('asignatura01').get().pipe(
    switchMap(snapshot => {
      const rutas = snapshot.docs.map(doc => `asignatura01/${doc.id}/Alumnos`);
      const observables = rutas.map(ruta =>
        this.afs.collection<Alumno>(ruta).valueChanges({ idField: 'id' })
      );
      return combineLatest(observables).pipe(
        map(listasDeAlumnos =>
          listasDeAlumnos.reduce((todos, alumnos) => [...todos, ...alumnos], [])
        )
      );
    })
  );
}
  buscarAlumnos(criterio: string, valor: string): Observable<Alumno[]> {
    return this.afs.collection('asignatura01').get().pipe(
      switchMap(snapshot => {
        const rutas = snapshot.docs.map(doc => `asignatura01/${doc.id}/Alumnos`);
        const observables = rutas.map(ruta =>
          this.afs.collection<Alumno>(ruta, ref =>
            ref.where(criterio, '==', valor)
          ).valueChanges({ idField: 'id' })
        );
        return combineLatest(observables).pipe(
          map((listasDeAlumnos: Alumno[][]) =>
            listasDeAlumnos.reduce((todos, alumnos) => [...todos, ...alumnos], [])
          ),
          catchError(error => {
            console.error('Error al buscar alumnos:', error);
            return of([]);
          })
        );
      })
    );
  }
  
  obtenerSecciones() {
    return this.firestore.collection('asignatura01').valueChanges().pipe(
      map((alumnos: any[]) => {
        const secciones = alumnos.map(alumno => alumno.id_seccion);
        return Array.from(new Set(secciones));
      })
    );
  }

  actualizarAsistenciaAlumno(id: string, path: string): Promise<void> {
    return this.afs.collection(path).doc(id).update({ asiste: true });
  }

  buscarAlumnoPorCredenciales(correo: string, password: string): Observable<Alumno | null> {
    return this.afs.collectionGroup<Alumno>('Alumnos', ref =>
        ref.where('correo', '==', correo).where('password', '==', password)
    ).valueChanges({ idField: 'id' }).pipe(
        map(alumnos => {
            console.log("Resultados búsqueda:", alumnos);
            return alumnos.length > 0 ? alumnos[0] : null;
        })
    );
}


}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { Alumno } from '../model/Alumno';

@Injectable({
  providedIn: 'root'
})
export class CrudApiService {

  constructor(private http: HttpClient) { }

  rutaApi="http://127.0.0.1:8000/api/usuario/"

  getAlumnos(): Observable<any>{
    return this.http.get(this.rutaApi).pipe(retry(3))
  }
}

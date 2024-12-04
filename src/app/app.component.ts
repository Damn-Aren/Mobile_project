import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.verificarConexionFirebase();
  }

  private async verificarConexionFirebase() {
    try {
      if (!firebase.apps.length) {
        console.error('Firebase no está inicializado.');
        return;
      }

      // Habilitar red de Firebase
      await firebase.firestore().enableNetwork();
      console.log('Conexión activa con Firebase.');

      await firebase.firestore().clearPersistence();
      console.log('Caché local de Firebase borrada correctamente.');
    } catch (err) {
      console.error('Error en la conexión con Firebase:', err);
    }
  }
}

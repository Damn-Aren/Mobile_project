import { Component, OnInit, NgZone } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';

import { Alumno } from 'src/app/model/Alumno';
import { CrudalumnoService } from 'src/app/servicios/crudalumno.service';

import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {  alumnos: Alumno[] = [];

  alumno: Alumno = { nombre: '', apellido: '', rut: '', id_seccion: '', asiste: false };
  nuevo_alumno: Alumno = { id: '', nombre: '', apellido: '', rut: '', id_seccion: '', asiste: false };
  lista_alumnos: Alumno[] = [];
  sw: boolean = false;

  constructor(private alertController:AlertController, private navCtrl:NavController, private crudalumnoService: CrudalumnoService, private zone: NgZone) {}

  nombre:string=''
  password:string=''
  
  ngOnInit() {
  }

  listar() {
    this.crudalumnoService.listarTodo().subscribe(data => {
      this.lista_alumnos = data;
    });
  }

  validar() {
    // Login del profesor
    if (this.nombre == "Email Martinez" && this.password == "OrangweRabbut77") {
        console.log("Valores profesor:", this.nombre);
        sessionStorage.setItem("usuario", this.nombre);
        this.navCtrl.navigateForward(['/home']);
        return; // Termina la función aquí para evitar evaluar el login de alumnos
    }

    // Login de alumnos
    this.crudalumnoService.buscarAlumnoPorCredenciales(this.nombre, this.password).subscribe(alumno => {
        if (alumno) {
            console.log("Valores alumno:", alumno.nombre);
            sessionStorage.setItem("usuario", this.nombre); // Guarda el usuario en la sesión
            this.navCtrl.navigateForward(['/home-alum']);
        } else {
            this.presentAlert(); // Muestra alerta si no se encuentra el usuario
        }
    });
}
  
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error de Login',
      message: 'Usuario o contraseña incorrectos o no existentes',
      buttons: ['Ok'],
    });

    await alert.present();
  }

  cuatrocerocuatro(){
    this.navCtrl.navigateRoot(['/pepe']);
  }

}
import { Component, OnInit, NgZone } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';

import { Alumno } from 'src/app/model/Alumno';
import { CrudalumnoService } from 'src/app/servicios/crudalumno.service';



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
    if (this.nombre == "Email.Martinez@institucion.edu" && this.password == "OrangweRabbut77") {
      sessionStorage.setItem("usuario", this.nombre);
      this.navCtrl.navigateForward(['/home']);
      return;
    }

    this.crudalumnoService.buscarAlumnoPorCredenciales(this.nombre, this.password).subscribe(alumno => {
      if (alumno) {
        sessionStorage.setItem("usuario", JSON.stringify(alumno)); 
        this.navCtrl.navigateForward(['/home-alum']);
      } else {
        this.presentAlert();
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
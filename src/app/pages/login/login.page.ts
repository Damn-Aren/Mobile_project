import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private alertController:AlertController, private navCtrl:NavController) {}

  nombre:string=''
  password:string=''
  
  ngOnInit() {
  }
  validar(){
    if (this.nombre == "Email Martinez" && this.password == "OrangweRabbut77") {
      console.log("Valores:", this.nombre);
      localStorage.setItem("usuario", this.nombre);
      this.navCtrl.navigateForward(['/home']);
    } else if (
      (this.nombre == "sdomingues@institucion.edu" || 
       this.nombre == "sherrera@institucion.edu" || 
       this.nombre == "ichamuyero@institucion.edu" || 
       this.nombre == "mpantufla@institucion.edu" || 
       this.nombre == "mlasheron@institucion.edu" || 
       this.nombre == "fdolphin@institucion.edu" || 
       this.nombre == "cveergara@institucion.edu" || 
       this.nombre == "icompleto@institucion.edu" || 
       this.nombre == "msereno@institucion.edu") 
      && this.password == "12345"
    ) {
      console.log("Valores:", this.nombre);
      localStorage.setItem("usuario", this.nombre);
      this.navCtrl.navigateForward(['/home-alum']);
    } else {
      this.presentAlert();
    }
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
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
    if (this.nombre=="Email Martinez" && this.password=="OrangweRabbut77"){
      console.log("Valores:",this.nombre)
      localStorage.setItem("usuario", this.nombre)
      this.navCtrl.navigateForward(['/home'])
    } else {
      if (this.nombre=="Juanito Alcachofa" && this.password=="12345"){
        console.log("Valores:",this.nombre)
        localStorage.setItem("usuario", this.nombre)
        this.navCtrl.navigateForward(['/home-alum'])     
      } else {
        this.presentAlert()	
      }
    }
  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login',
      subHeader: 'Acceso al sistema',
      message: 'Usuario o contraseña incorrectos',
      buttons: ['Action'],
    });

    await alert.present();
  }
}
  
  

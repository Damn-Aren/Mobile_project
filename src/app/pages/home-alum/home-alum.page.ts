import { Component,OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home-alum',
  templateUrl: './home-alum.page.html',
  styleUrls: ['./home-alum.page.scss'],
})
export class HomeAlumPage implements OnInit {

  usuario:string=''

  constructor(private navCtrl:NavController) {}

  ngOnInit(): void {
    var x = localStorage.getItem('usuario')
    this.usuario=x ??''
  }

  Cursos(){
    this.navCtrl.navigateForward(['list-cur-alumn'])
  }

  LeerQR(){
    this.navCtrl.navigateForward(['escanear-qr'])
  }
}

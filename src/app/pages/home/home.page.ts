import { Component,OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { CrudApiService } from 'src/app/servicios/crud-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  usuario:string=''

  constructor(private navCtrl:NavController, private crud:CrudApiService) {}

  ngOnInit(): void {
    var x = localStorage.getItem('usuario')
    this.usuario=x ??''
  }

  ListaCur(){
    this.navCtrl.navigateRoot(['/list-cur-docen']);
  }

  GenQR(){
    this.navCtrl.navigateRoot(['/gen-qrcls']);
  }

  Informes(){
    this.navCtrl.navigateRoot(['/infrs']);
  }
  Volver(){
    this.navCtrl.navigateRoot(['/secc']);
  }

  recuperar(){
    this.crud.getAlumnos().subscribe(
    (resp)=>{
      console.log(resp)
    }
  )
  }

  Irhomeal(){
    this.navCtrl.navigateRoot(['/home-alum']);
  }

}

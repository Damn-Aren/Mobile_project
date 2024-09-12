import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-lis-alum',
  templateUrl: './lis-alum.page.html',
  styleUrls: ['./lis-alum.page.scss'],
})
export class LisAlumPage implements OnInit {

  constructor(private navCtrl:NavController) {}

  ngOnInit() {
  }

  Volver(){
    this.navCtrl.navigateRoot(['/home']);
  }
  
}

import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-list-cur-docen',
  templateUrl: './list-cur-docen.page.html',
  styleUrls: ['./list-cur-docen.page.scss'],
})
export class ListCurDocenPage implements OnInit {

  constructor(private navCtrl:NavController) {}

  ngOnInit() {
  }

  PorCur(){
    this.navCtrl.navigateForward(['/ver'])
  }

  Volver(){
    this.navCtrl.navigateRoot(['/home']);
  }

}

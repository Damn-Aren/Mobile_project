import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-list-cur-alumn',
  templateUrl: './list-cur-alumn.page.html',
  styleUrls: ['./list-cur-alumn.page.scss'],
})
export class ListCurAlumnPage implements OnInit {

  constructor(private navCtrl:NavController) {}

  ngOnInit() {
  }

  splash(){
    this.navCtrl.navigateRoot(['/home-alum']);
  }
  Volver(){
    this.navCtrl.navigateRoot(['/home-alum']);
  }

}

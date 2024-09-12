import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.page.html',
  styleUrls: ['./ver.page.scss'],
})
export class VerPage implements OnInit {

  constructor(private navCtrl:NavController) {}

  ngOnInit() {
  }

  Volver(){
    this.navCtrl.navigateRoot(['/list-cur-docen']);
  }


}

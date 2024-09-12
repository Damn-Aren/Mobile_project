import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-presidente',
  templateUrl: './presidente.page.html',
  styleUrls: ['./presidente.page.scss'],
})
export class PresidentePage implements OnInit {

  constructor(private navCtrl:NavController) { }
  ngOnInit() {
  }

  splash(){
    this.navCtrl.navigateRoot(['/espera']);
  }
}

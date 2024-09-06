import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.page.html',
  styleUrls: ['./notfound.page.scss'],
})
export class NotfoundPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  splash(){
    this.navCtrl.navigateRoot(['/splash']);
  }
}

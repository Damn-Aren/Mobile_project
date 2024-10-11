import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-secc',
  templateUrl: './secc.page.html',
  styleUrls: ['./secc.page.scss'],
})
export class SeccPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {    setTimeout(()=>{
    this.navCtrl.navigateForward(['/login'])
  },5000)
  }

}

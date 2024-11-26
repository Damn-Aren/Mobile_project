import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-espera',
  templateUrl: './espera.page.html',
  styleUrls: ['./espera.page.scss'],
})
export class EsperaPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {    setTimeout(()=>{
    this.navCtrl.navigateForward(['/home-alum']);
  },10000)
  }

}

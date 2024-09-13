import { Component, OnInit, ViewChild } from '@angular/core';
import {NavController} from '@ionic/angular';
import type { IonModal } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.page.html',
  styleUrls: ['./notfound.page.scss'],
})
export class NotfoundPage implements OnInit {
  @ViewChild('modal', { static: true }) modal: IonModal;

  constructor(private navCtrl:NavController, private animationCtrl: AnimationController) { }


  ngOnInit() {
    const enterAnimation = (baseEl: HTMLElement) => {
      const root = baseEl.shadowRoot;
    }
  }

  closeModal() {
    this.modal.dismiss();
  }

  splash(){
    this.navCtrl.navigateRoot(['/splash']);
  }
}
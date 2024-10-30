import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

import pdfMake from "pdfmake/build/pdfmake"; 
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-infrs',
  templateUrl: './infrs.page.html',
  styleUrls: ['./infrs.page.scss'],
})
export class InfrsPage implements OnInit {

  ObjectPDF : any; 

  constructor(private navCtrl:NavController) {}

  ngOnInit() {
  }

  Volver(){
    this.navCtrl.navigateRoot(['/home']);
  }
  
  descargarPDF(){
    var dd = {
      content: [
        'First paragraph',
        'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
      ]
      
    }
    this.ObjectPDF = pdfMake.createPdf(dd);
    this.ObjectPDF.download('Informe_Asistencia');
  }

  
}

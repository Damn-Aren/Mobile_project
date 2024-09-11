import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home-alum',
  templateUrl: './home-alum.page.html',
  styleUrls: ['./home-alum.page.scss'],
})
export class HomeAlumPage implements OnInit {

  usuario:string=''

  constructor() {}

  ngOnInit(): void {
    var x = localStorage.getItem('usuario')
    this.usuario=x ??''
  }
}

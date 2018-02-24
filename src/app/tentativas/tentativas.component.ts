import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit {

  private vidaclass:string = 'fas vida-full';


  constructor() { }

  ngOnInit() {
  }

  public vidaFull():void{
    
  }


}

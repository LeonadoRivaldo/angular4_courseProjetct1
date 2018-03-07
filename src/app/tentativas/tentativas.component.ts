import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Vida } from "../shared/vida.model";





@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit, OnChanges {

  private vidas:Vida[] = [];
  @Input() private life:number;

  constructor() { 
  }

  ngOnInit() {
    this.setVidas(this.life);
  }

  private setVidas(life:number):void{
    this.vidas = [];
    for( let i = 0;  i<life; i++ ){
      this.vidas.push( new Vida() );
    }
  }

  public changeVida(life, full){
      this.vidas[life].cheio = full;
  }

  ngOnChanges(changes) {
    if(this.life>=0){
      if( this.life < this.vidas.length ){
        let index = ((this.vidas.length - this.life)-1);
        this.changeVida(index, false);
      }
    }
  }



}

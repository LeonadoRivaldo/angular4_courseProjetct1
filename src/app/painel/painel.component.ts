import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES  } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  public game_phrase = "Traduza essa frase?"
  public frases: Frase[] = FRASES;
  public dungeon:number = 0;
  public disabled:boolean = true;
  private resposta:string;
  private life:number = 3;

  constructor() { }

  ngOnInit() {
  }

  public atualizarResposta(event:Event):void{
    this.resposta = (<HTMLInputElement>event.target).value;
    if(this.resposta.length >= this.frases[this.dungeon].frasePtBr.length){
      this.disabled = false;
    }
  }

  public validar():void{
    if( this.resposta === this.frases[this.dungeon].frasePtBr ){
        this.dungeon++;
    }else{
        this.life--;
      if( this.life === 0 ){
        this.game_phrase = "Você perdeu!";
      }
    }
  }

}

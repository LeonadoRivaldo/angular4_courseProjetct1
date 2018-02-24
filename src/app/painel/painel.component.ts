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
  public progress:number = 0;

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

    //validação da resposta
    if( this.resposta.toLowerCase() === this.frases[this.dungeon].frasePtBr.toLowerCase() ){
      
      //verifica fim do jogo
      if( this.dungeon === (this.frases.length-1) ){
        this.game_phrase = "Você terminou o jogo!";
        this.disabled = true;
        this.progress = 100;
        //this.frases.push(new Frase("END GAME!", "FIM DE JOGO!"));
      }else{
        //incrementa para proxima rodada
        this.dungeon++;        
        //controle de progresso
        this.progress += (Math.ceil(100/this.frases.length));

        //zera resposta
        this.resposta = "";
        (<HTMLInputElement>document.getElementById("traduza")).value = "";
      }
    }else{
        this.life--;
      if( this.life === -1 ){
        this.game_phrase = "Você perdeu!";
      }
    }

    console.log(this.progress);
  }

}

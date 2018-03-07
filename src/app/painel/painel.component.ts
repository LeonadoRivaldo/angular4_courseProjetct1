import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES  } from './frase-mock';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit, OnDestroy {

  //private variables
  private game_phrase;
  private frases: Frase[];
  private dungeon:number;
  private disabled:boolean;
  private resposta:string;
  private tentativas:number = 0;
  
  //public variables
  public life:number;
  public progress:number;
  @Output() public encerrarJogo: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.game_phrase = "Traduza essa frase?"
    this.frases = FRASES;
    this.dungeon = 0;
    this.disabled = true;
    this.resposta = "";
    this.life = 3;
    this.progress = 0;
  }

  ngOnInit() {
  }
  
  ngOnDestroy(){
    console.log("painel destruido!");
  }

  private atualizarResposta(event:any):void{
    this.resposta = (<HTMLInputElement>event.target).value;
    if(this.resposta.length >= (this.frases[this.dungeon].frasePtBr.length-1)){
      this.disabled = false;
      if( event.keyCode === 13 ){
        this.validar();
      }
    }
  }

  private validar():void{

    //validação da resposta
    if( this.resposta.toLowerCase() === this.frases[this.dungeon].frasePtBr.toLowerCase() ){
      
      //verifica fim do jogo
      if( this.dungeon === (this.frases.length-1) ){
        this.encerrarJogo.emit(true);
        this.progress = 100;
        //this.frases.push(new Frase("END GAME!", "FIM DE JOGO!"));
      }else{
        //incrementa para proxima rodada
        this.dungeon++;
        this.tentativas++;    
        //controle de progresso
        this.progress += (Math.ceil(100/this.frases.length));
      }
    }else{
        this.life--;
      if( this.life === -1 ){
        this.encerrarJogo.emit(false);
      }
    }

    //console.log(this.progress);
  }

  private zerarResposta():void{
    setTimeout(()=>{
      this.resposta = ""
      this.disabled = true;
    }, 10 );
  }
}

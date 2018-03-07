import { Component } from '@angular/core';

const endphrase = function(string:string):any{
  return function(smile:string):string{
    return `Você ${string} o jogo! <i class="far fa-${smile}"></i>`;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  private successPhrase:any = endphrase('ganhou');
  private failPhrase:any = endphrase("perdeu");
  private jogoemandamento:boolean = true;
  private endphrase:string;

  private encerrarJogo(success:boolean):void{
    this.endphrase = success ? this.successPhrase("smile") : this.failPhrase("frown")
    this.jogoemandamento = false;
  }

  private resete():void{
    this.jogoemandamento = true;
  }
 

}

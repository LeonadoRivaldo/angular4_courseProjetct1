export class Vida{
    private vidaClassFull:string;
    private vidaClassEmpty:string;   
    public cheio:boolean;
    constructor(){
        this.vidaClassFull = "fas vida-full";
        this.vidaClassEmpty = "far vida-empty";
        this.cheio = true;
    }

    public getVidaClass():string{
        return this.cheio?this.vidaClassFull:this.vidaClassEmpty;
    }

}
export class Actor {
    id: string = "";
    Nombre: string;
    apellido: string;
    pais: string;

    constructor(Nombre: string,apellido: string ,pais: string){
        this.Nombre = Nombre;
        this.apellido = apellido;
        this.pais = pais;
    }
}

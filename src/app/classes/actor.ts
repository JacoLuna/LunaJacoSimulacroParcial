import { Pais } from "./pais";

export class Actor {
    id: string = "";
    Nombre: string;
    apellido: string;
    pais: Pais;

    constructor(Nombre: string,apellido: string ,pais: Pais){
        this.Nombre = Nombre;
        this.apellido = apellido;
        this.pais = pais;
    }
}

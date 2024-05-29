export class Pais {
    id: string = "";
    nombre: string;
    bandera: string;
    idioma: string;
    constructor(nombre: string,bandera: string ,idioma: string){
        this.nombre = nombre;
        this.bandera = bandera;
        this.idioma = idioma;
    }
}

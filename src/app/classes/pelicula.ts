import { ETipoPelicula } from '../enums/Etipo-pelicula';
import { Actor } from './actor';

export class Pelicula {
  id: string;
  Nombre: string;
  // tipo: ETipoPelicula; //{ terror , comedia, amor ,otros }
  tipo: string; //{ terror , comedia, amor ,otros }
//   fechaDeEstreno: Date;
  fechaDeEstreno: string;
  cantidadDePublico: number;
  FotoDeLaPelicula: string;
  actores: Actor[];

  constructor(
    id: string,
    Nombre: string,
    // tipo: ETipoPelicula,
    tipo: string,
    fechaDeEstreno: string,
    // fechaDeEstreno: Date,
    cantidadDePublico: number,
    FotoDeLaPelicula: string,
    actores: Actor[]
  ) {
    this.id = id;
    this.Nombre = Nombre;
    // this.tipo = tipo;
    this.tipo = tipo;
    // this.fechaDeEstreno = fechaDeEstreno;
    this.fechaDeEstreno = fechaDeEstreno;
    this.cantidadDePublico = cantidadDePublico;
    this.FotoDeLaPelicula = FotoDeLaPelicula;
    this.actores = actores;
  }
}

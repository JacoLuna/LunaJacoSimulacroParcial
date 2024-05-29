import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TablaActorComponent } from "../../components/tabla-actor/tabla-actor.component";
import { Actor } from '../../classes/actor';
import { Pelicula } from '../../classes/pelicula';
import { ETipoPelicula } from '../../enums/Etipo-pelicula';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
    selector: 'app-pelicula-alta',
    standalone: true,
    templateUrl: './pelicula-alta.component.html',
    styleUrl: './pelicula-alta.component.scss',
    imports: [FormsModule, CommonModule, NavBarComponent, TablaActorComponent]
})
export class PeliculaAltaComponent {
  
  FotoDeLaPelicula: string = "";
  nombre: string = "";
  cantidadDePublico!: number;
  fechaDeEstreno: string = "";
  tipos : string[] = ["amor","comedia", "terror","otro"];
  tipo!: string;
  actores: Actor[] = []
  
  constructor(private peliculasSrv: PeliculasService){
  }

  addPelicula() {
    if(  this.nombre != "" 
      && this.cantidadDePublico > 0 
      && this.fechaDeEstreno != "" 
      && this.tipo != "" 
      && this.actores.length != 0
    ){
      let pelicula = new Pelicula('',this.nombre,this.tipo,this.fechaDeEstreno,this.cantidadDePublico,this.FotoDeLaPelicula,this.actores);
      this.peliculasSrv.addPelicula(pelicula);
    }
  }
  selectTipo(tipo: string){
    this.tipo = tipo;
  }
  addActor(actor: Actor) {
    this.actores.push(actor);
    console.log(this.actores);
  }
  delActor(actor: Actor){
    this.actores.forEach( (e, index) => {
      if(e.id == actor.id){
        this.actores.splice(index,1);
      }
    });
  }

}

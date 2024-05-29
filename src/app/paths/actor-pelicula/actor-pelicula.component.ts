import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { DetalleActorComponent } from '../../components/detalle-actor/detalle-actor.component';
import { DetallePeliculaComponent } from "../../components/detalle-pelicula/detalle-pelicula.component";
import { ActorListadoComponent } from "../../components/actor-listado/actor-listado.component";
import { DetallePaisComponent } from "../../components/detalle-pais/detalle-pais.component";
import { Actor } from '../../classes/actor';
import { Pelicula } from '../../classes/pelicula';
import { Pais } from '../../classes/pais';
import { PeliculasService } from '../../services/peliculas.service';
import { ActoresService } from '../../services/actores.service';
import { PaisesService } from '../../services/pais.service';

@Component({
    selector: 'app-actor-pelicula',
    standalone: true,
    templateUrl: './actor-pelicula.component.html',
    styleUrl: './actor-pelicula.component.scss',
    imports: [NavBarComponent, DetalleActorComponent, DetallePeliculaComponent, ActorListadoComponent, DetallePaisComponent]
})
export class ActorPeliculaComponent implements OnInit{

    actor: Actor;
    peliculasActor: Pelicula[] = [];
    pais: Pais;

    actores: Actor[] = [];
    peliculas: Pelicula[] = [];
    paises: Pais[] = []; 
    constructor(private peliculaSrv: PeliculasService, private actorSrv: ActoresService, private paisSrc: PaisesService){
        this.actor = new Actor("","","");
        this.pais = new Pais("","","");
    }
    ngOnInit(): void {
        this.peliculaSrv.Peliculas.subscribe( peliculas => {
            this.peliculas = peliculas;
        })
        this.actorSrv.actores.subscribe( actores => {
            this.actores = actores;
        })
        // this.paisSrc.Pais.subscribe( paises => {
        //     this.paises = paises;
        // });
        
        this.paisSrc.get().subscribe((pais) => {
            console.log(pais);
            //     this.paises = paises;
        });
    }

    selectActor(actor: Actor) {
        this.peliculasActor.length = 0;
        this.paises.forEach( pais => {
            if(actor.pais == pais.nombre){
                this.pais = pais;
            }
        });
        this.peliculas.forEach( pelicula => {
            pelicula.actores.forEach( actorPelicula => {
                if(actor.id == actorPelicula.id){
                    this.peliculasActor.push(pelicula);
                }
            })
        });
        this.actor = actor;
    }
}

import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { Pelicula } from '../../classes/pelicula';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-tabla-pelicula',
  standalone: true,
  imports: [],
  templateUrl: './tabla-pelicula.component.html',
  styleUrl: './tabla-pelicula.component.scss'
})
export class TablaPeliculaComponent implements OnInit{


  @Output() eventSelectedMovie = new EventEmitter<Pelicula>();
  peliculas: Pelicula[] = [];
  peliculasSrv = inject(PeliculasService);

  constructor(){
  }

  ngOnInit(): void {
    this.peliculasSrv.Peliculas.subscribe( e => {
      this.peliculas = e;
    })
  }

  selectPelicula(click: any) {
    this.peliculas.forEach(e => {
      if(e.Nombre == click.srcElement.innerText){
        this.eventSelectedMovie.emit(e);
      }
    });
  }
}


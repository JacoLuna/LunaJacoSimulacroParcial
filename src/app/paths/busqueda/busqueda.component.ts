import { Component, OnInit } from '@angular/core';
import { TablaPeliculaComponent } from '../../components/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from '../../components/detalle-pelicula/detalle-pelicula.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { Pelicula } from '../../classes/pelicula';
import { PeliculasService } from '../../services/peliculas.service';


@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [TablaPeliculaComponent, DetallePeliculaComponent, NavBarComponent],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.scss'
})
export class BusquedaComponent implements OnInit{
  
  peliculas!: Pelicula[];
  detallePelicula: Pelicula[] = [];
  constructor(private peliculaSrv: PeliculasService){}

  ngOnInit(): void {
    this.peliculaSrv.Peliculas.subscribe( peliculas => {
      this.peliculas = peliculas;
    })
  }
  
  selectedMovie(pelicula: Pelicula) {
    this.detallePelicula.length = 0;
    this.detallePelicula.push(pelicula);
  }
}

import { Component, Input } from '@angular/core';
import { Pelicula } from '../../classes/pelicula';
@Component({
  selector: 'app-detalle-pelicula',
  standalone: true,
  imports: [],
  templateUrl: './detalle-pelicula.component.html',
  styleUrl: './detalle-pelicula.component.scss'
})
export class DetallePeliculaComponent {

  @Input() peliculas!: Pelicula[];
}

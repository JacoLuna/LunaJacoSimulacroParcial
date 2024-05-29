import { Component, Input } from '@angular/core';
import { Pais } from '../../classes/pais';

@Component({
  selector: 'app-detalle-pais',
  standalone: true,
  imports: [],
  templateUrl: './detalle-pais.component.html',
  styleUrl: './detalle-pais.component.scss'
})
export class DetallePaisComponent {
  @Input() pais!: Pais;
}

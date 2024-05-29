import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaisesService } from '../../services/pais.service';

@Component({
  selector: 'app-tabla-paises',
  standalone: true,
  imports: [],
  templateUrl: './tabla-paises.component.html',
  styleUrl: './tabla-paises.component.scss',
})
export class TablaPaisesComponent implements OnInit {
  constructor(private paisSrv: PaisesService) {}

  @Output() paisEvent = new EventEmitter<string>();

  ngOnInit(): void {
    this.paisSrv.get().subscribe((pais) => {
      console.log(pais);
    });
  }

  selectPais(value: string) {
    console.log(value);
    this.paisEvent.emit(value);
  }
}

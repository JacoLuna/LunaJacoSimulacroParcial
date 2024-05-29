import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaisesService } from '../../services/pais.service';
import { Pais } from '../../classes/pais';

@Component({
  selector: 'app-tabla-paises',
  standalone: true,
  imports: [],
  templateUrl: './tabla-paises.component.html',
  styleUrl: './tabla-paises.component.scss',
})
export class TablaPaisesComponent implements OnInit {
  @Output() paisEvent = new EventEmitter<Pais>();
  paises : Pais[] = [];
  constructor(private paisSrv: PaisesService) {}


  ngOnInit(): void {
    // this.paisSrv.get().subscribe((pais) => {
    //   console.log(pais);
    // });
    this.paisSrv.getPaises().subscribe( e => {
      this.paises = e;
    });
  }

  selectPais(pais: Pais) {
    this.paisEvent.emit(pais);
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { Actor } from '../../classes/actor';
import { ActoresService } from '../../services/actores.service';

@Component({
  selector: 'app-actor-listado',
  standalone: true,
  imports: [],
  templateUrl: './actor-listado.component.html',
  styleUrl: './actor-listado.component.scss'
})
export class ActorListadoComponent {

  protected actores: Actor[] = [];
  @Output() eventSelectedActor = new EventEmitter<Actor>();
  
  constructor(private actoresSrv: ActoresService){}

  ngOnInit(): void {
    this.actoresSrv.actores.subscribe( actores => {
      this.actores = actores;
    })
  }

  selectActor(click: any) {
    this.actores.forEach(e => {
      if(e.Nombre == click.srcElement.innerText){
        this.eventSelectedActor.emit(e);
      }
    });
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from '../../classes/actor';
import { ActoresService } from '../../services/actores.service';

@Component({
  selector: 'app-tabla-actor',
  standalone: true,
  imports: [],
  templateUrl: './tabla-actor.component.html',
  styleUrl: './tabla-actor.component.scss'
})
export class TablaActorComponent implements OnInit{

  protected actores: Actor[] = [];
  @Output() addActoresEvent = new EventEmitter<Actor>();
  @Output() delActoresEvent = new EventEmitter<Actor>();

  constructor(private actoresSrv: ActoresService){}

  ngOnInit(): void {
    this.actoresSrv.actores.subscribe( actores => {
      this.actores = actores;
    })
  }
  clickActor(actor: Actor, selected: any) {
    if(selected.srcElement.checked){
      this.addActoresEvent.emit(actor);
    }else{
      this.delActoresEvent.emit(actor);
    }
  }
}

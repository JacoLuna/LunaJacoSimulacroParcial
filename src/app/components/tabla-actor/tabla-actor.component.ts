import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from '../../classes/actor';
import { ActoresService } from '../../services/actores.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-tabla-actor',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './tabla-actor.component.html',
  styleUrl: './tabla-actor.component.scss'
})
export class TablaActorComponent implements OnInit{

  protected actores: Actor[] = [];
  @Output() addActoresEvent = new EventEmitter<Actor>();
  @Output() delActoresEvent = new EventEmitter<Actor>();
  frmGroup: FormGroup;

  constructor(private actoresSrv: ActoresService, private frmBuilder: FormBuilder){
    this.frmGroup = this .frmBuilder.group({
      nombre : ['',[Validators.required]],
      fechaDeEstreno : ['',[Validators.required]],
      cantPublico :['',[Validators.required]],
      actores: ['',[Validators.required]]
  })
  }
  get errorControl(){
    return this.frmGroup?.controls;
  }

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

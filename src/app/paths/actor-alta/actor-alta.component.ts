import { Component, OnInit, inject } from '@angular/core';
import { TablaPaisesComponent } from '../../components/tabla-paises/tabla-paises.component';
import { ActoresService } from '../../services/actores.service';
import { Actor } from '../../classes/actor';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { linkWithCredential } from 'firebase/auth';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { Pais } from '../../classes/pais';

@Component({
    selector: 'app-actor-alta',
    standalone: true,
    templateUrl: './actor-alta.component.html',
    styleUrl: './actor-alta.component.scss',
    imports: [TablaPaisesComponent, FormsModule, NavBarComponent, ReactiveFormsModule]
})
export class ActorAltaComponent implements OnInit{

  protected nombre: string = "";
  protected apellido: string = "";
  protected pais!: Pais;
  protected actorSrv = inject(ActoresService);
  frm: FormGroup;

  constructor(private frmBuilder: FormBuilder){
    this.frm = this.frmBuilder.group({
      nombre : ['',[Validators.required]],
      apellido : ['',[Validators.required]],
    })
  }
  get errorControl(){
    return this.frm?.controls;
  }

  ngOnInit(): void {
  }

  selectPelicula(pais: Pais){
    this.pais = pais;
  }
  addActor(){
    if(this.nombre != "" && this.apellido != "" && this.pais){
      let actor: Actor = new Actor(this.nombre, this.apellido, this.pais);
      console.log(actor);
      this.actorSrv.addActor(actor);
      this.nombre = "";
      this.apellido = "";
    }
  }
}

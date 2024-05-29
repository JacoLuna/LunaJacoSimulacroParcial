import { Component, OnInit, inject } from '@angular/core';
import { TablaPaisesComponent } from '../../components/tabla-paises/tabla-paises.component';
import { ActoresService } from '../../services/actores.service';
import { Actor } from '../../classes/actor';
import { FormsModule } from '@angular/forms';
import { linkWithCredential } from 'firebase/auth';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";

@Component({
    selector: 'app-actor-alta',
    standalone: true,
    templateUrl: './actor-alta.component.html',
    styleUrl: './actor-alta.component.scss',
    imports: [TablaPaisesComponent, FormsModule, NavBarComponent]
})
export class ActorAltaComponent implements OnInit{

  protected nombre: string = "";
  protected apellido: string = "";
  protected pelicula: string = "";
  protected actorSrv = inject(ActoresService);

  ngOnInit(): void {
  }

  selectPelicula(pelicula: string){
    this.pelicula = pelicula;
  }
  addActor(){
    if(this.nombre != "" && this.apellido != "" && this.pelicula != ""){
      let actor: Actor = new Actor(this.nombre, this.apellido, this.pelicula);
      console.log(actor);
      this.actorSrv.addActor(actor);
      this.nombre = "";
      this.apellido = "";
      this.pelicula = "";
    }
  }
}

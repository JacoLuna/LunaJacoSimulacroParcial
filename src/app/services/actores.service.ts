import { Injectable } from '@angular/core';
import { Actor } from '../classes/actor';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {
  private actoresCollection: AngularFirestoreCollection<Actor>;
  actores: Observable<Actor[]>;

  constructor(private firestore: AngularFirestore) {
    this.actoresCollection = this.firestore.collection<Actor>('actores');
    this.actores = this.actoresCollection.valueChanges();
  }

  peliculaAdded(actor: Actor) {
    return this.actoresCollection.add(JSON.parse(JSON.stringify(actor)));
  }
  async addActor(actor: Actor) {
    let id: any;
    id = (await this.actoresCollection.add(JSON.parse(JSON.stringify(actor)))).id;
    actor.id = id;
    this.actoresCollection.doc(id).set(JSON.parse(JSON.stringify(actor)));
  }
}

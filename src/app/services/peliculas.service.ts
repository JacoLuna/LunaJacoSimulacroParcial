import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Pelicula } from '../classes/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private PeliculaCollection: AngularFirestoreCollection<Pelicula>;
  Peliculas: Observable<Pelicula[]>;

  constructor(private firestore: AngularFirestore) {
    this.PeliculaCollection = this.firestore.collection<Pelicula>('peliculas');
    this.Peliculas = this.PeliculaCollection.valueChanges();
  }

  peliculaAdded(pelicula: Pelicula) {
    return this.PeliculaCollection.add(JSON.parse(JSON.stringify(pelicula)));
  }
  async addPelicula(pelicula: Pelicula) {
    let id: any;
    id = (await this.PeliculaCollection.add(JSON.parse(JSON.stringify(pelicula)))).id;
    pelicula.id = id;
    this.PeliculaCollection.doc(id).set(JSON.parse(JSON.stringify(pelicula)));
  }
}

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { AngularFireModule } from '@angular/fire/compat';
import { HttpClient, provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      AngularFireModule.initializeApp({
        apiKey: 'AIzaSyCFt1PlKZDi1248k-EjAhUaI521JeFKMsw',
        authDomain: 'lab4lunajaco.firebaseapp.com',
        projectId: 'lab4lunajaco',
        storageBucket: 'lab4lunajaco.appspot.com',
        messagingSenderId: '85267814802',
        appId: '1:85267814802:web:cbca4ad65cc54d08f2c94b',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    importProvidersFrom(HttpClient),
    provideHttpClient(),
  ],
};

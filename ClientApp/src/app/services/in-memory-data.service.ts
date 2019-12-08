import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Docente } from '../models/docente';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const Docente = [
    { id: 0, identificacion: '12321', primerNombre: 'Pedro', segundoNombre:'David', primerApellido: 'Arnedo' , segundoApellido : 'Romero', genero:'Masculino', correo:'cabesa@gmail.com', fechaNacimiento:'ayer',telefono:23, cargo: 'Parh' , facultad: 'Ing'}
    ];   
    return {Docente};
  }

}

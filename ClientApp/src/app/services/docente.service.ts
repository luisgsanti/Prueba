import { Injectable,Inject } from '@angular/core';

import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Docente } from '../models/docente';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  

@Injectable({
  providedIn: 'root'
})

export class DocenteServiceService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string )
  { 
  }
      /** POST: add a new task to the server */
      add(docente: Docente): Observable<Docente> {
        return this.http.post<Docente>(this.baseUrl+'api/Docente', docente, httpOptions).pipe(
          tap((newDocente: Docente) => this.log(`Docente agregado `/*id= ${newDocente.id}`*/)),
          catchError(this.handleErrorAdd<Docente>('Error Al Agregar Docente'))
        )
      }

      /** GET Task from the server */
      getAll():Observable<Docente[]>
      {
        return this.http.get<Docente[]>(this.baseUrl+'api/Docente').pipe(
        tap(/*=>this.log('Se Consulta la información')*/),
        catchError(this.handleError<Docente[]>('getAll',[]))
        );
      }

      getActivosAdministrativos():Observable<Docente[]>
      {
        return this.http.get<Docente[]>(this.baseUrl+'api/Docente/ActivoAdministrativo').pipe(
        tap(/*=>this.log('Se Consulta la información')*/),
        catchError(this.handleError<Docente[]>('getAll',[]))
        );
      }

      /** GET task by id. Will 404 if id not found */
      get(id: number): Observable<Docente>
      {
        const url = `${this.baseUrl + 'api/Docente'}/${id}`;
        return this.http.get<Docente>(url).pipe(
        tap(_ => this.log(`fetched docente id=${id}`)),
        catchError(this.handleError<Docente>(`getDocente id=${id}`))
        );
      }

      /** PUT: update the Task on the server */
    update (docente: Docente): Observable<any> {
      const url =`${this.baseUrl + 'api/Docente'}/${docente.id}`;
      return this.http.put(url, docente, httpOptions).pipe(
      tap(_ => this.log(`updated docente identificacion=${docente.id}`)),
      catchError(this.handleError<any>('docente'))
      );
    }

    /** DELETE: delete the task from the server */
    delete (docente: Docente | number): Observable<Docente> {
      const id = typeof docente === 'number' ? docente : docente.id;
      const url =
      
      `${this.baseUrl + 'api/Docente'}/${id}`;
      
      return this.http.delete<Docente>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted docente id=${id}`)),
      catchError(this.handleError<Docente>('deletedocente'))
      );
    }

    private handleErrorAdd<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
      console.error(error);
      this.log('Rellene Los Campos Requeridos  * ');
      return of(result as T);
      };
    }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
      };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      alert(`DocenteService: ${message}`);
    }
}

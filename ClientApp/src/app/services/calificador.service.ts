import { Injectable,Inject } from '@angular/core';

import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Calificaciones } from '../models/calificaciones';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CalificadorService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string ) { }

  /** POST: add a new task to the server */
  add(calificaciones: Calificaciones): Observable<Calificaciones> {
    return this.http.post<Calificaciones>(this.baseUrl+'api/Calificacion', calificaciones, httpOptions).pipe(
      tap((newCalificadocion: Calificaciones) => this.log(`Calificador agregado`)),
      catchError(this.handleError<Calificaciones>('AddCalificador'))
    )
  }

  /** GET Task from the server */
  getAll(id: string):Observable<Calificaciones[]>
  {
    const url = `${this.baseUrl + 'api/Calificacion'}/${id}`;
    return this.http.get<Calificaciones[]>(url).pipe(
    tap(/*=>this.log('Se Consulta la información')*/),
    catchError(this.handleError<Calificaciones[]>('getAll',[]))
    );
  }

  /** GET task by id. Will 404 if id not found */
  get(id: string): Observable<Calificaciones>
  {
    const url = `${this.baseUrl + 'api/Calificacion'}/${id}`;
    return this.http.get<Calificaciones>(url).pipe(
    tap(_ => this.log(`fetched calificador id=${id}`)),
    catchError(this.handleError<Calificaciones>(`getPregunta id=${id}`))
    );
  }

  /** PUT: update the Task on the server */
  update (calificaciones: Calificaciones): Observable<any> {
    const url =`${this.baseUrl + 'api/Calificacion'}/${calificaciones.id_Calificacion}`;
    return this.http.put(url, calificaciones, httpOptions).pipe(
    tap(_ => this.log(`updated calificador id=${calificaciones.id_Calificacion}`)),
    catchError(this.handleError<any>('calificador'))
    );
  }

  /** DELETE: delete the task from the server */
  delete (calificaciones: Calificaciones | number): Observable<Calificaciones> {
    const id = typeof calificaciones === 'number' ? calificaciones : calificaciones.id_Calificacion;
    const url =
    
    `${this.baseUrl + 'api/Calificacion'}/${id}`;
    
    return this.http.delete<Calificaciones>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted calificador id=${id}`)),
    catchError(this.handleError<Calificaciones>('delete Calificador'))
    );
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

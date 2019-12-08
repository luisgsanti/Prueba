import { Injectable,Inject } from '@angular/core';

import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Pregunta } from '../models/pregunta';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string ) { }

  /** POST: add a new task to the server */
  add(pregunta: Pregunta): Observable<Pregunta> {
    return this.http.post<Pregunta>(this.baseUrl+'api/Pregunta', pregunta, httpOptions).pipe(
      tap((newPregunta: Pregunta) => this.log(`Pregunta agregada `)),
      catchError(this.handleError<Pregunta>('AddPregunta'))
    )
  }

  /** GET Task from the server */
  getAll():Observable<Pregunta[]>
  {
    return this.http.get<Pregunta[]>(this.baseUrl+'api/Pregunta').pipe(
    tap(/*=>this.log('Se Consulta la información')*/),
    catchError(this.handleError<Pregunta[]>('getAll',[]))
    );
  }

  getActivas():Observable<Pregunta[]>
  {
    return this.http.get<Pregunta[]>(this.baseUrl+'api/Pregunta/Activas').pipe(
    tap(/*=>this.log('Se Consulta la información')*/),
    catchError(this.handleError<Pregunta[]>('getAll',[]))
    );
  }

  /** GET task by id. Will 404 if id not found */
  get(id: number): Observable<Pregunta>
  {
    const url = `${this.baseUrl + 'api/Pregunta'}/${id}`;
    return this.http.get<Pregunta>(url).pipe(
    tap(_ => this.log(`fetched pregunta id=${id}`)),
    catchError(this.handleError<Pregunta>(`getPregunta id=${id}`))
    );
  }

  /** PUT: update the Task on the server */
update (pregunta: Pregunta): Observable<any> {
  const url =`${this.baseUrl + 'api/Pregunta'}/${pregunta.id}`;
  return this.http.put(url, pregunta, httpOptions).pipe(
  tap(/*_ => this.log(`updated pregunta id=${pregunta.id}`)*/),
  catchError(this.handleError<any>('pregunta'))
  );
}

/** DELETE: delete the task from the server */
delete (pregunta: Pregunta | number): Observable<Pregunta> {
  const id = typeof pregunta === 'number' ? pregunta : pregunta.id;
  const url =
  
  `${this.baseUrl + 'api/Pregunta'}/${id}`;
  
  return this.http.delete<Pregunta>(url, httpOptions).pipe(
  tap(_ => this.log(`deleted pregunta id=${id}`)),
  catchError(this.handleError<Pregunta>('delete Pregunta'))
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

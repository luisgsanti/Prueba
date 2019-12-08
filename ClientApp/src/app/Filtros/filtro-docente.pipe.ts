import {
  Pipe,
  PipeTransform
} from '@angular/core';

import {
  Docente
} from "../models/docente"

@Pipe({
  name: 'filtroDocente'
})
export class FiltroDocentePipe implements PipeTransform {

  transform(docentes: Docente[], searchText: string) {
    if (searchText == null) return docentes;
    return docentes.filter(docente =>
      docente.identificacion.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
      docente.id.toString().toLowerCase() ==searchText.toLowerCase() ||
      docente.primerNombre.toString().toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
      docente.primerApellido.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
      docente.facultad.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
      docente.correo.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
      docente.estado.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 
    );
  }

}

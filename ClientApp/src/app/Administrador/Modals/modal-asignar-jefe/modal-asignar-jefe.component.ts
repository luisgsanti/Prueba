import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Calificaciones } from "../../../models/calificaciones";
import { Docente }from "../../../models/docente"
import { ActivatedRoute } from '@angular/router';
import { CalificadorService } from '../../../services/calificador.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDatosDocenteComponent } from '../modal-datos-docente/modal-datos-docente.component';
import {
  DocenteServiceService
} from '../../../services/docente.service';

@Component({
  selector: 'app-modal-asignar-jefe',
  templateUrl: './modal-asignar-jefe.component.html',
  styleUrls: ['./modal-asignar-jefe.component.css']
})
export class ModalAsignarJefeComponent implements OnInit {

  calificacion: Calificaciones;

  constructor(private docenteservice: DocenteServiceService, private calificadorService: CalificadorService) { }

  @Input() docente: Docente;

  docentes: Docente[];
  ngOnInit() {
    this.getAll();
    this.calificacion = new Calificaciones();
  }

  getAll() {
    this.docenteservice.getAll().subscribe(docentes => this.docentes = docentes);
  }

  add(calificador: string) {
    alert( this.docente.identificacion);
    this.calificacion.id_DocenteCalificado = this.docente.identificacion;
    alert( this.docente.identificacion);
    this.calificacion.id_Calificador = calificador;
    this.calificacion.tipo_Calificador = "JEFE";
    this.calificadorService.add(this.calificacion)
      .subscribe();
  }
}

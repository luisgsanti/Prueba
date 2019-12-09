import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Calificaciones } from "../../../models/calificaciones";
import { Docente }from "../../../models/docente"
import { ActivatedRoute } from '@angular/router';
import { CalificadorService } from '../../../services/calificador.service';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAsignarJefeComponent} from "../../Modals/modal-asignar-jefe/modal-asignar-jefe.component";
import { ModalAsignarParComponent} from "../../Modals/modal-asignar-par/modal-asignar-par.component";


@Component({
  selector: 'app-modal-datos-docente',
  templateUrl: './modal-datos-docente.component.html',
  styleUrls: ['./modal-datos-docente.component.css']
})
export class ModalDatosDocenteComponent implements OnInit {

  calificaciones : Calificaciones[];
  

  constructor(public ActiveModal: NgbActiveModal, private route: ActivatedRoute,
    private calificadorService: CalificadorService,  private modalService: NgbModal) {}


  @Input() docente: Docente;

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.calificadorService.getAll(this.docente.identificacion).subscribe(calificaciones => this.calificaciones = calificaciones);
  }

  open(docente:Docente){
    const modalRef = this.modalService.open(ModalAsignarJefeComponent, { size: 'lg' });
    modalRef.componentInstance.docente = docente;
  }

  open2(docente:Docente){
    const modalRef2 = this.modalService.open(ModalAsignarParComponent, { size: 'lg' });
    modalRef2.componentInstance.docente = docente;
  }

}

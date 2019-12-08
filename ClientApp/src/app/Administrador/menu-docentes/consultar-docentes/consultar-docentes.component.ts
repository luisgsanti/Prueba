import {
  Component,
  OnInit
} from '@angular/core';
import {
  DocenteServiceService
} from '../../../services/docente.service';
import {
  Docente
} from '../../../models/docente';

@Component({
  selector: 'app-consultar-docentes',
  templateUrl: './consultar-docentes.component.html',
  styleUrls: ['./consultar-docentes.component.css']
})
export class ConsultarDocentesComponent implements OnInit {

  docentes: Docente[];
  constructor(private docenteservice: DocenteServiceService) {}
  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.docenteservice.getAll().subscribe(docentes => this.docentes = docentes);
  }
}

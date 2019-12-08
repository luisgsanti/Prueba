import { Component, OnInit } from '@angular/core';
import { PreguntaService } from '../../../services/pregunta.service';
import { Pregunta } from '../../../models/pregunta';

@Component({
  selector: 'app-formulario-actual',
  templateUrl: './formulario-actual.component.html',
  styleUrls: ['./formulario-actual.component.css']
})
export class FormularioActualComponent implements OnInit {

  preguntas : Pregunta[];
  preguntasActivas : Pregunta[];
  constructor(private preguntaService:PreguntaService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.preguntaService.getActivas().subscribe(preguntas=>this.preguntas=preguntas);
  }



}

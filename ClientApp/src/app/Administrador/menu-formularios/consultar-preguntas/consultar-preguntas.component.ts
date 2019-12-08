import { Component, OnInit } from '@angular/core';
import { PreguntaService } from '../../../services/pregunta.service';
import { Pregunta } from '../../../models/pregunta';
import {Location } from '@angular/common'

@Component({
  selector: 'app-consultar-preguntas',
  templateUrl: './consultar-preguntas.component.html',
  styleUrls: ['./consultar-preguntas.component.css']
})
export class ConsultarPreguntasComponent implements OnInit {

  preguntas : Pregunta[];
  


  constructor(private preguntaService:PreguntaService, private location : Location) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.preguntaService.getAll().subscribe(preguntas=>this.preguntas=preguntas);
  }
  cambiarEstado(pregunta:Pregunta): void {

      pregunta.estado= !pregunta.estado;
    
      this.preguntaService.update(pregunta)
      .subscribe(() => this.goBack)
  }

  goBack(): void{
    this.location.back();
  }
}

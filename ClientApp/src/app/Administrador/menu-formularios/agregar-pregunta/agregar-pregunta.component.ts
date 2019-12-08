import {
  Component,
  OnInit
} from '@angular/core';
import {
  PreguntaService
} from '../../../services/pregunta.service';
import {
  Pregunta
} from '../../../models/pregunta';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms'

@Component({
  selector: 'app-agregar-pregunta',
  templateUrl: './agregar-pregunta.component.html',
  styleUrls: ['./agregar-pregunta.component.css']
})
export class AgregarPreguntaComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private preguntaService: PreguntaService, private formBuilder: FormBuilder) {}
  pregunta: Pregunta;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      descripcion: ['', Validators.required],
      categoria: ['', Validators.required],
      estado: [''],
    });
    this.pregunta = new Pregunta();
  }

  add() {
    this.preguntaService.add(this.pregunta)
      .subscribe( );
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.add();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent} from '../app/inicio/inicio.component';
import { MenuDocentesComponent} from "../app/Administrador/menu-docentes/menu-docentes.component";
import { AgregarDocentesComponent } from "../app/Administrador/menu-docentes/agregar-docentes/agregar-docentes.component";
import { ModificarDocentesComponent } from "../app/Administrador/menu-docentes/modificar-docentes/modificar-docentes.component";
import { DesactivarDocentesComponent } from "../app/Administrador/menu-docentes/desactivar-docentes/desactivar-docentes.component";
import { MenuFormulariosComponent } from "../app/Administrador/menu-formularios/menu-formularios.component";
import { FormularioActualComponent } from "../app/Administrador/menu-formularios/formulario-actual/formulario-actual.component";
import { ConsultarDocentesComponent } from "../app/Administrador/menu-docentes/consultar-docentes/consultar-docentes.component";
import { AsignarEvaluadorComponent } from "../app/Administrador/menu-evaluacion/asignar-evaluador/asignar-evaluador.component";
import { PrincipalComponent } from "../app/Administrador/principal/principal.component";
import { AgregarPreguntaComponent } from "../app/Administrador/menu-formularios/agregar-pregunta/agregar-pregunta.component";
import { ConsultarPreguntasComponent } from "../app/Administrador/menu-formularios/consultar-preguntas/consultar-preguntas.component";
import { ModalDatosDocenteComponent} from "../app/Administrador/Modals/modal-datos-docente/modal-datos-docente.component"
import { ModalAsignarJefeComponent} from "../app/Administrador/Modals/modal-asignar-jefe/modal-asignar-jefe.component";

const routes: Routes = [
  { path: '', component: InicioComponent , pathMatch: 'full' },
  { path: 'Adminitrador/MenuDeGestion', component: MenuDocentesComponent},
  { path: 'Adminitrador/MenuDeGestion/NuevoDocente', component: AgregarDocentesComponent},
  { path: 'Adminitrador/MenuDeGestion/ModificarDocente/:id', component: ModificarDocentesComponent},
  { path: 'Adminitrador/MenuDeGestion/DesactivarDocente', component: DesactivarDocentesComponent},
  { path: 'Adminitrador/MenuDeFormularios', component: MenuFormulariosComponent},
  { path: 'Adminitrador/MenuDeFormularios/FormularioActual', component: FormularioActualComponent},
  { path: 'Adminitrador/MenuDeGestion/ConsultarDocentes', component: ConsultarDocentesComponent},
  { path: 'Adminitrador/MenuEvaluador/AsignarEvaluador', component: AsignarEvaluadorComponent},
  { path: 'Adminitrador/principal', component: PrincipalComponent},
  { path: 'Inicio', component: InicioComponent},
  { path: 'Adminitrador/MenuDeFormularios/AgregarPregunta', component: AgregarPreguntaComponent},
  { path: 'Adminitrador/MenuDeFormularios/ConsultarPreguntas', component: ConsultarPreguntasComponent},
  { path: 'Adminitrador/MenuEvaluador/AsignarEvaluador/ModalsDatos', component: ModalDatosDocenteComponent},
  { path: 'Adminitrador/MenuEvaluador/AsignarEvaluador/ModalsAsignarJefe', component: ModalAsignarJefeComponent},
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

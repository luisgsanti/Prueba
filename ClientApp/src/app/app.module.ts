import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BarraDeNavegacionComponent } from './Administrador/barra-de-navegacion/barra-de-navegacion.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuFormulariosComponent } from './Administrador/menu-formularios/menu-formularios.component';
import { MenuDocentesComponent } from './Administrador/menu-docentes/menu-docentes.component';
import { AppRoutingModule } from './app-routing.module';
import { FormularioActualComponent } from './Administrador/menu-formularios/formulario-actual/formulario-actual.component';
import { ConsultarDocentesComponent } from './Administrador/menu-docentes/consultar-docentes/consultar-docentes.component';
import { DesactivarDocentesComponent } from './Administrador/menu-docentes/desactivar-docentes/desactivar-docentes.component';
import { ModificarDocentesComponent } from './Administrador/menu-docentes/modificar-docentes/modificar-docentes.component';
import { AgregarDocentesComponent } from './Administrador/menu-docentes/agregar-docentes/agregar-docentes.component';
import { PrincipalComponent } from './Administrador/principal/principal.component';
import { AgregarPreguntaComponent } from './Administrador/menu-formularios/agregar-pregunta/agregar-pregunta.component';
import { ConsultarPreguntasComponent } from './Administrador/menu-formularios/consultar-preguntas/consultar-preguntas.component';
import { AsignarEvaluadorComponent } from './Administrador/menu-evaluacion/asignar-evaluador/asignar-evaluador.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FiltroDocentePipe } from './Filtros/filtro-docente.pipe';
import { ModalDatosDocenteComponent } from './Administrador/Modals/modal-datos-docente/modal-datos-docente.component';
import { ModalAsignarJefeComponent } from './Administrador/Modals/modal-asignar-jefe/modal-asignar-jefe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarraDeNavegacionComponent,
    InicioComponent,
    MenuFormulariosComponent,
    MenuDocentesComponent,
    FormularioActualComponent,
    ConsultarDocentesComponent,
    DesactivarDocentesComponent,
    ModificarDocentesComponent,
    AgregarDocentesComponent,
    PrincipalComponent,
    AgregarPreguntaComponent,
    ConsultarPreguntasComponent,
    AsignarEvaluadorComponent,
    FiltroDocentePipe,
    ModalDatosDocenteComponent,
    ModalAsignarJefeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
    ]),
    /*HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
      ),*/
      AppRoutingModule,
      ReactiveFormsModule,
      
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [
      ModalDatosDocenteComponent
    ]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AuthService } from '../../services/auth.service';
import { LoginService } from '../../services/login.service';
import { ActivatedRoute } from'@angular/router';
import { Login } from 'src/app/models/login';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

declare var JQuery:any;
declare var $:any;

@Component({
  selector: 'app-barra-de-navegacion',
  templateUrl: './barra-de-navegacion.component.html',
  styleUrls: ['./barra-de-navegacion.component.css'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
    ])
  ]
})

export class BarraDeNavegacionComponent implements OnInit {
   
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  constructor(private authorizeService: AuthService, private authService: AuthService, private loginService:LoginService, private route: ActivatedRoute) { }

  logg: Observable<Login>;
  aux: Login;
  private clientes = new Subject<Login>();
  


  pipa(){
    this.aux = new Login();
    var user = "Pedro";
    this.loginService.getUsuario(user).subscribe(login => {

      console.log(login);
      if (login != null) {
        this.aux.Usuario = login.Usuario;
        this.aux.Identificacion = login.Identificacion;
      }
    });

    alert(this.aux.Usuario);
    alert( this.aux.Identificacion);
  }


  getUsuario(usuario: string): void {
    
    var user = "Pedro";
    this.loginService.getUsuario(user).subscribe( aux => this.aux = aux);
    alert(usuario);
    alert(this.aux);

    if(this.aux != null){
      this.authService.login(this.aux.Usuario, this.aux.Clave ,this.aux.Rol);
    }
  }

  sw=false;

  login(rol:string)
  {
    this.authService.login('pedro', '12345', rol);
  }

  logout() {
    this.authService.logout();
    this.sw=false;
  }

  userName(): string {
    return this.authorizeService.getUserName();
  }
  
  public isAuthenticated(): boolean
  {
    let isAuth=this.authorizeService.isAuthenticated();
    if(isAuth && !this.sw)
    {
      this.sw=true;
      setTimeout(()=> {
        this.activar();
      },1300)
    }
    return isAuth;
  }


  isAuthenticatedRole(role: string): boolean {
    
    if (this.isAuthenticated && role != null ) {
      return this.authorizeService.hasRole(role);
    }
  }

  public activar(){
    
    $(".sidebar-dropdown > a").click(function() {
      $(".sidebar-submenu").slideUp(200);
      if (
        $(this)
          .parent()
          .hasClass("active")
      ) {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .parent()
          .removeClass("active");
      } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .next(".sidebar-submenu")
          .slideDown(200);
        $(this)
          .parent()
          .addClass("active");
      }
    });
    
    $("#close-sidebar").click(function() {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function() {
      $(".page-wrapper").addClass("toggled");
    });
   
  }

  ngOnInit() { 
    this.activar();

  }

}

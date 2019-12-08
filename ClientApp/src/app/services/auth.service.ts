import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { IfStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private _router: Router) {}

    login(user: string, password: string, rol: string) {
        //validar en el servidor si el usuario y password son válidos.
        //en el caso que sean válidos se deberian retornar los roles que tiene asociado dicho usuario
        //se podría encriptar el nombre de la variable
        sessionStorage.setItem('user', user);
        sessionStorage.setItem('password',password);
        sessionStorage.setItem('roles', JSON.stringify([rol]));

        //sessionStorage.setItem('roles', JSON.stringify(['admin']));
        
        this._router.navigate(['/Inicio']);
    }

    logout() {
        sessionStorage.clear();
        this._router.navigate(['/Inicio']);
    }

    isAuthenticated(): boolean {
        return sessionStorage.getItem('user')!=null;
    }

    hasRole(rol: string): boolean {
        if (!this.isAuthenticated()) return false;
        let roles: string[] = JSON.parse(sessionStorage.getItem('roles'));
        return roles.indexOf(rol) >= 0;
    }

    getUserName(): string {
        return sessionStorage.getItem('user') != null ? sessionStorage.getItem('user'):'Anonimo';
    }
}
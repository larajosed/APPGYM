import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Subject } from 'rxjs';
import { JsonPipe } from '@angular/common';

export interface Usuario {
  id: number;
  nombre: string;
  apellidos: string;
}


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private baseUrl: string;
  private userSession?: any;


  constructor(private httpclient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/usuarios';
    const localStorageUser = localStorage.getItem('user');
    if (localStorageUser === null) {
      this.userSession = undefined;
    } else {
      this.userSession = JSON.parse(localStorageUser);
    }
  };

  registro(formValues: any): Promise<any> {
    return firstValueFrom(this.httpclient.post(`${this.baseUrl}/registro`, formValues));
  };

  login(formValues: any): Promise<any> {
    return firstValueFrom(this.httpclient.post(`${this.baseUrl}/login`, formValues));
  };

  setUserSession(userSession: Usuario): void {
    this.userSession = userSession;
    localStorage.setItem('user', JSON.stringify(userSession));
  }

  getUserSession(): Usuario {
    return this.userSession;

  }

  logOut(): void {
    this.userSession = undefined;
    localStorage.removeItem('user');
  }
}
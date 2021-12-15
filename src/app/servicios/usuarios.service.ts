import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private baseUrl: string;
  private login$: Subject<boolean>;

  constructor(private httpclient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/usuarios';
    this.login$ = new Subject;

  };

  registro(formValues: any): Promise<any> {

    return firstValueFrom(this.httpclient.post(`${this.baseUrl}/registro`, formValues));
  };

  login(formValues: any): Promise<any> {
    return firstValueFrom(this.httpclient.post(`${this.baseUrl}/login`, formValues));

  };

  logged(isLogged: boolean) {
    this.login$.next(isLogged);
  }

  loginObs() {
    return this.login$.asObservable();
  }
}
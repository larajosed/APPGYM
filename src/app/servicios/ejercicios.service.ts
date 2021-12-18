import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface Ejercicios {
  name?: string;
  description?: string;
  url?: string;
  repetitions?: string;
}


@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/ejercicios';
  }

  getAllEjercicios(): Promise<any> {
    return firstValueFrom(this.httpClient.get(`${this.baseUrl}/all`))
  };


  getByGroupMuscle(grupoMuscularId: string): Promise<any> {
    const parameters = { grupoMuscular: grupoMuscularId }
    return firstValueFrom(this.httpClient.get(`${this.baseUrl}/muscle`, { params: parameters }))
  }

}

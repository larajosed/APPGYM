import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
export class AgregarEjercicioService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/ejercicios';
  }


}

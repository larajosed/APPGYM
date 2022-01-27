import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';


export interface Routines {
  id: number;
  name: string;
  image: string;

}


@Injectable({
  providedIn: 'root'
})
export class RutinasService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/rutinas';
  }

  getAllRoutine(): Promise<any> {
    return firstValueFrom(this.httpClient.get(`${this.baseUrl}/all`))
  };


  getByRoutineId(routineId: string): Promise<any> {
    const parameters = { routine: routineId }
    return firstValueFrom(this.httpClient.get(`${this.baseUrl}/ejercicios`, { params: parameters }))
  }
}
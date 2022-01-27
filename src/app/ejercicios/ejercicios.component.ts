import { Component, OnInit } from '@angular/core';
import { Ejercicios, EjerciciosService } from '../servicios/ejercicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {

  arrEjercicios: Ejercicios[];

  constructor(private ejerciciosService: EjerciciosService, private router: Router) {
    this.arrEjercicios = [];
  }

  ngOnInit(): void {
    this.ejerciciosService.getAllEjercicios().then(res => this.arrEjercicios = res);
  }

  onChangeName($event: any): void {
    const grupoMuscularId = $event.target.value;
    if (grupoMuscularId === '0') {
      this.ejerciciosService.getAllEjercicios().then(res => this.arrEjercicios = res);
    } else {
      this.ejerciciosService.getByGroupMuscle(grupoMuscularId).then(res => this.arrEjercicios = res);
    }
  }
}

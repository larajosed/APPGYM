import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ejercicios } from '../servicios/ejercicios.service';
import { Routines, RutinasService } from '../servicios/rutinas.service';

@Component({
  selector: 'app-ejercicios-rutina',
  templateUrl: './ejercicios-rutina.component.html',
  styleUrls: ['./ejercicios-rutina.component.css']
})
export class EjerciciosRutinaComponent implements OnInit {
  id?: any;
  exercisesRoutine: Ejercicios[];
  nameRoutine: string;

  constructor(private router: ActivatedRoute, private rutinasService: RutinasService) {
    this.exercisesRoutine = []
    this.nameRoutine = ''
  }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = params['id']
    })
    this.rutinasService.getByRoutineId(this.id).then(res => {
      this.exercisesRoutine = res.ejercicios;
      this.nameRoutine = res.routine.name;

    });
  }

}

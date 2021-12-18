import { Component, Input, OnInit } from '@angular/core';
import { Ejercicios } from '../servicios/ejercicios.service';

@Component({
  selector: 'app-lista-ejercicios',
  templateUrl: './lista-ejercicios.component.html',
  styleUrls: ['./lista-ejercicios.component.css']
})
export class ListaEjerciciosComponent implements OnInit {

  @Input()
  arrEjercicios: Ejercicios[]

  constructor() {
    this.arrEjercicios = [];
  }

  ngOnInit(): void {
  }

}

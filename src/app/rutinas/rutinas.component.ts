import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Routines, RutinasService } from '../servicios/rutinas.service';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrls: ['./rutinas.component.css']
})
export class RutinasComponent implements OnInit {

  routines: Routines[];

  constructor(private rutinasService: RutinasService, private router: Router) {
    this.routines = [];
  }

  ngOnInit(): void {
    this.rutinasService.getAllRoutine().then(res => this.routines = res)
  }

}

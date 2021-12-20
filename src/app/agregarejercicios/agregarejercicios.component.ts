import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { EjerciciosService } from '../servicios/ejercicios.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/modal/modal.component';

@Component({
  selector: 'app-agregarejercicios',
  templateUrl: './agregarejercicios.component.html',
  styleUrls: ['./agregarejercicios.component.css']
})
export class AgregarejerciciosComponent implements OnInit {
  formulario: FormGroup

  constructor(private ejerciciosService: EjerciciosService, private router: Router, private modalService: NgbModal) {
    this.formulario = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      url: new FormControl()
    })

  };

  ngOnInit(): void {
  }

  onSubmit() {
    this.ejerciciosService.addExcercise(this.formulario.value).then(response => {
      if (response.error) {
        const modal = this.modalService.open(ModalComponent)
        modal.componentInstance.title = "Error";
        modal.componentInstance.content = "No se ha podido guardar con éxito. Intentelo de nuevo mas tarde.";
      } else {
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.title = "Guardado correctamente";
        modal.componentInstance.content = "Se ha guardado con éxito";
        modal.result.then(result => {
          this.router.navigate(['/ejercicios']);
        })
      }
    }).catch(err => {
      const modal = this.modalService.open(ModalComponent)
      modal.componentInstance.title = "Error";
      modal.componentInstance.content = "No se ha podido guardar con éxito. Intentelo de nuevo mas tarde.";
    })
  }

}


import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { ModalComponent } from 'src/app/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  error: string;

  constructor(private usuariosService: UsuariosService, private router: Router, private modalService: NgbModal) {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });

    this.error = '';
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.error = '';
    this.usuariosService.login(this.formulario.value)
      .then(response => {
        if (response.error) {
          const modal = this.modalService.open(ModalComponent);
          modal.componentInstance.title = "Error";
          modal.componentInstance.content = (response.error);
        } else {
          const modal = this.modalService.open(ModalComponent);
          modal.componentInstance.title = "Login Correcto";
          modal.componentInstance.content = "Bienvenido a MyGymApp";
          this.usuariosService.logged(true);
          modal.result.then(result => {
            this.router.navigate(['/ejercicios']);
          })

        }
      })
      .catch(err => console.log(err));
  }

}



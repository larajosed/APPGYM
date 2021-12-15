import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/modal/modal.component';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup

  constructor(private usuariosService: UsuariosService, private modalService: NgbModal, private router: Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
      ]),
      apellidos: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/)
      ]),
      username: new FormControl(),
      password: new FormControl('', [
        Validators.required,
      ]),
      repite_password: new FormControl('', [
        Validators.required,
      ]),
      genero: new FormControl(),
      fecha_nacimiento: new FormControl(),
      direccion: new FormControl()
    }, [this.passwordValidator])
  }

  ngOnInit(): void {
  }

  open(title: String, content: String) {
    const modal = this.modalService.open(ModalComponent)
    this.modalService.open(ModalComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    }, (reason) => { console.log(reason) });
  }

  onSubmit() {
    this.usuariosService.registro(this.formulario.value)
      .then(response => {
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.title = "Guardado correctamente";
        modal.componentInstance.content = "Se ha guardado con éxito";
        modal.result.then(result => {
          this.router.navigate(['/login']);
        })
      })
      .catch(err => {
        const modal = this.modalService.open(ModalComponent)
        modal.componentInstance.title = "Error";
        modal.componentInstance.content = "No se ha podido guardar con éxito. Intentelo de nuevo mas tarde.";
      });

  }


  checkError(controlName: string, error: string): boolean {
    return this.formulario.get(controlName)!.hasError(error) && this.formulario.get(controlName)!.touched;
  }

  passwordValidator(form: AbstractControl) {
    const passwordValue = form.get('password')?.value;
    const repitepasswordValue = form.get('repite_password')?.value;

    if (passwordValue === repitepasswordValue) {
      return null;
    } else {
      form.get('repite_password')?.setErrors({ passwordvalidator: true });
      return { passwordvalidator: true };
    }
  }


}






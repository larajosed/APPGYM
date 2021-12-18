import { Component, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-activate-guard',
  templateUrl: './activate-guard.component.html',
  styleUrls: ['./activate-guard.component.css']
})

@Injectable()
export class ActivateGuardComponent implements CanActivate {

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  canActivate(): boolean {
    const hasSession = this.usuariosService.getUserSession() !== undefined;
    if (hasSession) {
      return true;
    } else {
      this.router.navigate(['/acceso-no-permitido']);
      return false;
    }
  }


}

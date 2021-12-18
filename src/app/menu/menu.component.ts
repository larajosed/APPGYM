import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario, UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private usuariosService: UsuariosService) {

  }

  ngOnInit(): void {
  }

  getLoggedUser(): Usuario {
    return this.usuariosService.getUserSession();
  }

  hasUser(): boolean {
    return this.getLoggedUser() !== undefined;
  }

  logOut(): void {
    this.usuariosService.logOut();
    this.router.navigate(['/home']);
  }
}


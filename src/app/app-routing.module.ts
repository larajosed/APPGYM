import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoNoPermitidoComponent } from './acceso-no-permitido/acceso-no-permitido.component';
import { ActivateGuardComponent } from './activate-guard/activate-guard.component';
import { EjerciciosRutinaComponent } from './ejercicios-rutina/ejercicios-rutina.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { HomeComponent } from './home/home.component';
import { RutinasComponent } from './rutinas/rutinas.component';
import { LoginComponent } from './usuarios/login/login.component';
import { RegistroComponent } from './usuarios/registro/registro.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'rutinas', component: RutinasComponent, canActivate: [ActivateGuardComponent] },
  { path: 'ejercicios', component: EjerciciosComponent, canActivate: [ActivateGuardComponent] },
  { path: 'ejercicios/rutina/:id', component: EjerciciosRutinaComponent, canActivate: [ActivateGuardComponent] },
  { path: 'acceso-no-permitido', component: AccesoNoPermitidoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

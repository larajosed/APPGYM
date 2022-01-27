import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RutinasComponent } from './rutinas/rutinas.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { MenuComponent } from './menu/menu.component';
import { RegistroComponent } from './usuarios/registro/registro.component';
import { LoginComponent } from './usuarios/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { ListaEjerciciosComponent } from './lista-ejercicios/lista-ejercicios.component';
import { EjerciciosRutinaComponent } from './ejercicios-rutina/ejercicios-rutina.component';
import { ActivateGuardComponent } from './activate-guard/activate-guard.component';
import { AccesoNoPermitidoComponent } from './acceso-no-permitido/acceso-no-permitido.component';
import { AgregarejerciciosComponent } from './agregarejercicios/agregarejercicios.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    RutinasComponent,
    EjerciciosComponent,
    MenuComponent,
    RegistroComponent,
    LoginComponent,
    HomeComponent,
    ModalComponent,
    ListaEjerciciosComponent,
    EjerciciosRutinaComponent,
    ActivateGuardComponent,
    AccesoNoPermitidoComponent,
    AgregarejerciciosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [ActivateGuardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

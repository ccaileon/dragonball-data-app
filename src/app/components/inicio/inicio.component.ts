import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../models/personaje';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
personajeAleatorio!: Personaje;
ultimoId!: number;

constructor(private apiService: ApiService) {}


obtenerPersonaje() {
  let idAleatorio;
  do {
idAleatorio = Math.floor(Math.random() * 35) + 1;
} while (idAleatorio === this.ultimoId);
this.ultimoId = idAleatorio;
this.apiService.getPersonaje(idAleatorio).subscribe(respuesta => {
   console.log("Personaje: ", respuesta.id);
  this.personajeAleatorio = respuesta;
})
}

ngOnInit(): void {
  this.obtenerPersonaje();
}
}




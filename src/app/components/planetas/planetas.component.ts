import { Component, OnInit } from '@angular/core';
import { Planeta } from '../../models/planeta';
import { ApiService } from '../../services/api.service';
import { Personaje } from '../../models/personaje';


@Component({
  selector: 'app-planetas',
  standalone: false,
  templateUrl: './planetas.component.html',
  styleUrl: './planetas.component.css'
})

export class PlanetasComponent implements OnInit {
planetas: Planeta[] = [];
planetasFiltrados: Planeta[] = [];
listadoHabitantes: Personaje[] = [];

modalVisible = false; // Control para el modal


constructor(private apiService: ApiService) {}

ngOnInit(): void {
  this.obtenerPlanetas();
}

obtenerPlanetas() {
  this.apiService.getPlanetas().subscribe(respuesta => {
    console.log('Respuesta de la API (Planetas):', respuesta);
    this.planetas = respuesta.items;
  });
}

obtenerHabitantes(id: number) {
  this.apiService.getPlaneta(id).subscribe(respuesta => {
    console.log(`Respuesta de API (Habitantes Planeta ${id}):`, respuesta)
    this.listadoHabitantes = respuesta.characters;
    this.abrirModal();
  });
}

// -- Funciones para controlar la visibilidad del modal --
  abrirModal() {
    this.modalVisible = true; 
    console.log(this.modalVisible);
  }
  cerrarModal() {
    this.modalVisible = false; 
        console.log(this.modalVisible);
}

}

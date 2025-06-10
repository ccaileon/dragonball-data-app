import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../models/personaje';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Transformacion } from '../../models/transformacion';

@Component({
  selector: 'app-personajes',
  standalone: false,
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent implements OnInit {
personajes: Personaje[] = [];
personajesFiltrados: Personaje[] = [];
// -- Filtros --
razas: string[] = [];
generos: string[] = [];
formularioFiltro: FormGroup;

modalVisibleHistoria = false; // Control para el modal de historia del personaje
modalVisibleTransformacion = false; // Control para el modal de transformaciones
historiaSeleccionada: string = ''; // Variable para guardar la descripción del personaje
nombreSeleccionado: string = '';
listaTransformaciones: Transformacion[] = [];

constructor(private apiService: ApiService, private fb: FormBuilder) {
  this.formularioFiltro = this.fb.group({
    race:[''],
    gender:['']
  });
}

ngOnInit(): void {
  this.obtenerPersonajes();
  this.formularioFiltro.valueChanges.subscribe(filters => {
    this.filtrar(filters);
  });
}

obtenerPersonajes() {
  this.apiService.getPersonajes().subscribe(respuesta => {
      console.log('Respuesta de la API:', respuesta);
    this.personajes = respuesta.items;
    this.personajesFiltrados = this.personajes;

    this.razas = [...new Set(this.personajes.map(p => p.race))];
    this.generos = [...new Set(this.personajes.map(p => p.gender))];
  });
}

filtrar(filters: any) {
  this.personajesFiltrados = this.personajes.filter(personaje => {
    return (
      (filters.race ? personaje.race === filters.race : true) &&
      (filters.gender ? personaje.gender === filters.gender : true)
    );
  });
}

leerHistoria(id: number) {
  this.apiService.getPersonaje(id).subscribe(respuesta => {
    this.nombreSeleccionado = respuesta.name;
    this.historiaSeleccionada = respuesta.description;
    this.abrirModalHistoria();
  })
}

obtenerTransformaciones(id: number) {
    this.apiService.getPersonaje(id).subscribe(respuesta => {
    this.nombreSeleccionado = respuesta.name;
    this.listaTransformaciones = respuesta.transformations;
  console.log('Transformaciones:', JSON.stringify(respuesta.transformations));
    this.abrirModalTransformacion();
})
}

// Funciones para controlar la visibilidad del modal
  abrirModalHistoria() {
    this.modalVisibleHistoria = true;
    console.log(this.modalVisibleHistoria);
  }

  cerrarModalHistoria() {
    this.modalVisibleHistoria = false;
        console.log(this.modalVisibleHistoria);
}


  abrirModalTransformacion() {
    this.modalVisibleTransformacion = true; 
    console.log(this.modalVisibleTransformacion);
  }

  cerrarModalTransformacion() {
    this.modalVisibleTransformacion = false; 
        console.log(this.modalVisibleTransformacion);
}
}

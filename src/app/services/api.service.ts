import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespuestaApiPersonajes } from '../models/respuesta-api-personajes';
import { RespuestaApiPlaneta } from '../models/respuesta-api-planeta';
import { Planeta } from '../models/planeta';
import { PlanetaHabitantes } from '../models/planetaHabitantes';
import { Personaje } from '../models/personaje';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private baseUrl = 'https://dragonball-api.com/api';
  constructor(private http: HttpClient) {  }

  // -- Obtener lista de personajes --
    getPersonajes():Observable<RespuestaApiPersonajes> {
      return this.http.get<RespuestaApiPersonajes>(this.baseUrl + '/characters?page=1&limit=58');
    }
  // -- Obtener un personaje concreto --
    getPersonaje(id: number):Observable<Personaje> {
      return this.http.get<Personaje>(this.baseUrl + `/characters/${id}`);
    }
  // -- Obtener lista de planetas --
    getPlanetas():Observable<RespuestaApiPlaneta> {
      return this.http.get<RespuestaApiPlaneta>(this.baseUrl + '/planets?page=1&limit=30')
    }
  // -- Obtener lista de habitantes de un planeta concreto --
    getPlaneta(id: number):Observable<PlanetaHabitantes> {
return this.http.get<PlanetaHabitantes>(this.baseUrl + `/planets/${id}`);
    }
}

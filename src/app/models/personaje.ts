import { Planeta } from "./planeta"
import { Transformacion } from "./transformacion";

export interface Personaje {
  id: number,
  name: string,
  ki: string, // String porque algunos son 'unknown'
  maxKi: string, // String porque algunos son 'unknown'
  race: string,
  gender: string,
  description: string,
  image: string,
  affiliation: string,
  originPlanet: Planeta,
  transformations: Transformacion[];
}

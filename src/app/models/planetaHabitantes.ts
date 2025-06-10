import { Personaje } from "./personaje";
import { Planeta } from "./planeta";


export interface PlanetaHabitantes extends Planeta {
  characters: Personaje[];
}

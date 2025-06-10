import { Personaje } from "./personaje";
import { RespuestaApiGeneral } from "./respuesta-api-general";

export interface RespuestaApiPersonajes extends RespuestaApiGeneral {
items: Personaje[];
}

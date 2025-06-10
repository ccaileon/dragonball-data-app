import { Planeta } from "./planeta";
import { RespuestaApiGeneral } from "./respuesta-api-general";

export interface RespuestaApiPlaneta extends RespuestaApiGeneral {
items: Planeta[];
}

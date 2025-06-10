import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PlanetasComponent } from './components/planetas/planetas.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
{path: 'personajes', component: PersonajesComponent},
{path: 'planetas', component: PlanetasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

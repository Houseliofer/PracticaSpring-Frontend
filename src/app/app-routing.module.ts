import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './editar/editar/editar.component';
import { HomeComponent } from './home/home.component';
import { CrearComponent } from './crear/crear.component';
import { BuscadoComponent } from './buscar/buscado/buscado.component';

const routes: Routes = [
  {
    path:'receta/:titulo',
    component: BuscadoComponent
  },
  {
    path: 'crear-receta',
    component: CrearComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'editar/:id',
    component: EditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

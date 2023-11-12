import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RecetaComponent } from '../home/receta/receta.component';
@Component({
  selector: 'app-buscar',
  templateUrl:'buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent {

  busqueda: any = {
    titulo: '',
    dificultad: ''
  };

  resultadosRecetas: any[] = [];

  constructor(private http: HttpClient,
              private router: Router,
              private recetaComponent: RecetaComponent) {}

  buscarRecetas(){
    let url = 'http://localhost:8080/receta';

    if (this.busqueda.titulo) {
      url = `http://localhost:8080/receta/titulo/${this.busqueda.titulo}`;
    } else if (this.busqueda.dificultad) {
      url = `http://localhost:8080/receta/dificultad/${this.busqueda.dificultad}`;
    }

    this.http.get(url).subscribe((data: any) => {
      this.resultadosRecetas = data;
      this.recetaComponent.actualizarRecetasMostradas(data);
      // Maneja los resultados de la búsqueda, por ejemplo, actualiza una lista de recetas.
    });
  }
}

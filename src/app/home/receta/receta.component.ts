import { Component, EventEmitter, Output } from '@angular/core';
import { RecetaService } from '../services/receta.service';
import { Receta } from 'src/app/models/receta.model';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-receta',
  templateUrl: "receta.component.html",
  styles: [
  ]
})
export class RecetaComponent {

  recetasMostradas: any[] = []; // Recetas que se mostrarán

  pageSize = 6
  recetas: Receta[] = [];
  desde: number = 0
  hasta: number = 6

  constructor(private recetaService: RecetaService,
    private router: Router,
    private http: HttpClient,
    private snackBar: MatSnackBar) {
    this.recetaService.getRecetas()
      .subscribe(recetas => {
        // manejar respuesta
        this.recetasMostradas = recetas as any;;
      });
  }

  changePage(e: PageEvent) {
    this.desde = e.pageIndex * e.pageSize
    this.hasta = this.desde + e.pageSize
  }

  borrarReceta(id: string) {
    // Realiza una solicitud DELETE para borrar la receta en la API
    this.http.delete(`http://localhost:8080/receta/${id}`, { responseType: 'text' }).subscribe(
      (response: string) => {
        // Maneja la respuesta del servidor, que es un string
        this.recetasMostradas = this.recetasMostradas.filter((receta) => receta.recetaId !== id);

        console.log('Receta borrada con éxito', response);

        // Muestra un Snackbar de confirmación
        this.snackBar.open('Receta borrada con éxito', 'Cerrar', {
          duration: 3000,
        });

        this.router.navigate(['/']);
      },
      (error) => {
        // Maneja cualquier error que ocurra al borrar la receta
        console.error('Error al borrar la receta', error);
        // Puedes mostrar un Snackbar de error si lo deseas
        this.snackBar.open('Error al borrar la receta', 'Cerrar', {
          duration: 3000,
          panelClass: ['snackbar-error'],
        });
      }
    );
  }
  actualizarRecetasMostradas(resultados: any[]) {
    this.recetasMostradas = resultados;
  }
  

}

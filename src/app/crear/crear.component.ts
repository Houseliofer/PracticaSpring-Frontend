import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crear',
  templateUrl:'crear.component.html',
  styles: [
  ]
})
export class CrearComponent {

  nuevaReceta: any = {
    titulo: '',
    ingredientes: [],
    tiempo: null,
    nivelDificultad: 'Fácil',
    imagen: '',
    video: ''
  };

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar,
              private router: Router) {}

  crearReceta(){
    // Dividir los ingredientes separados por comas en un array
    this.nuevaReceta.ingredientes = this.nuevaReceta.ingredientes.split(',');
    // Enviar la nueva receta al servidor utilizando una solicitud POST
    this.http.post('http://localhost:8080/receta', this.nuevaReceta).subscribe(
      (response: any) => {
        // Muestra un snackBar de éxito
        this.snackBar.open('Receta creada con éxito', 'Cerrar', { duration: 3000 });

        // Redirige al usuario a la página de inicio
        this.router.navigate(['/']);
      },
      (error) => {
        // Manejar cualquier error que ocurra al crear la receta.
        console.error('Error al crear la receta', error);
      }
    );

    console.log(this.nuevaReceta)
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: 'editar.component.html',
  styles: [
  ]
})
export class EditarComponent {

  receta: any = {};
  ingredientesInput: string = ''; // Propiedad para ingresar ingredientes separados por comas


  constructor(private route: ActivatedRoute, 
              private http: HttpClient,
              private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit(): void {
    // Recibe el ID de la receta desde la ruta
    const recetaId = this.route.snapshot.paramMap.get('id');

    // Lógica para obtener la receta de la API según el ID
    this.http.get('http://localhost:8080/receta/' + recetaId).subscribe((response) => {
      // Asigna la receta recuperada a la variable receta
      this.receta = response;
      this.ingredientesInput = this.receta.ingredientes.join(', '); // Formatea los ingredientes como una cadena

    });
  }

  editarReceta() {
    this.receta.ingredientes = this.ingredientesInput.split(',').map(ingrediente => ingrediente.trim());
    // Realiza una solicitud PUT para actualizar la receta en la API
    // Utiliza this.receta para enviar los datos de la receta editada
    this.http.put('http://localhost:8080/receta', this.receta).subscribe((response) => {
      // Maneja la respuesta de la API
      console.log('Receta editada con éxito', response);
      this.snackBar.open('Receta editada con éxito', 'Cerrar', {
        duration: 3000, // Duración en milisegundos
      });
      // Redirige a la página principal o donde desees después de la edición
    });

    this.router.navigate(['/']);

  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule} from '@angular/material/paginator';
import { RecetaComponent } from './home/receta/receta.component';
import { HeaderComponent } from './home/header/header.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import { HttpClientModule} from '@angular/common/http';
import { RecetaService } from '../app/home/services/receta.service';
import { EditarComponent } from './editar/editar/editar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatIconModule} from '@angular/material/icon';
import { CrearComponent } from './crear/crear.component';
import { BuscarComponent } from './buscar/buscar.component';
import { BuscadoComponent } from './buscar/buscado/buscado.component';

@NgModule({
  declarations: [
    AppComponent,
    RecetaComponent,
    HeaderComponent,
    EditarComponent,
    HomeComponent,
    CrearComponent,
    BuscarComponent,
    BuscadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [
    RecetaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

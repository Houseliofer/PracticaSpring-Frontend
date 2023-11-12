import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html',
  styles: [
  ]
})
export class HeaderComponent {
  @Input() pageTitle: string = 'Título Predeterminado';
}
